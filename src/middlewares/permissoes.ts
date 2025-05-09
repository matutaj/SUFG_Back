import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";
import { AppError } from "../errors/AppError";
import prisma from "../prisma/client";

interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
  permissions?: string[];
  rolesForPermission?: string[];
  rolesForPermissions?: { [key: string]: string[] };
}

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}

// Função para obter permissões associadas à função do usuário
async function getPermissionsForRole(role: string): Promise<string[]> {
  const funcao = await prisma.funcoes.findFirst({
    where: { nome: role },
    select: { id: true },
  });

  if (!funcao) {
    return [];
  }

  const permissoes = await prisma.funcoesPermissoes.findMany({
    where: { id_funcao: funcao.id },
    include: { Permissoes: true },
  });

  return permissoes.map((p) => p.Permissoes.nome);
}

// Função para obter funções associadas a uma permissão
async function getRolesForPermission(permissao: string): Promise<string[]> {
  const permissaoEncontrada = await prisma.permissoes.findFirst({
    where: { nome: permissao },
    select: { id: true },
  });

  if (!permissaoEncontrada) {
    return [];
  }

  const funcoes = await prisma.funcoesPermissoes.findMany({
    where: { id_permissao: permissaoEncontrada.id },
    include: { funcoes: true },
  });

  return funcoes.map((f) => f.funcoes.nome);
}

// Middleware para verificar uma única permissão
export const verificarPermissao = (permissaoRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const [, token] = authHeader.split(" ");

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      // Obtém permissões do usuário e funções associadas à permissão requerida
      const permissoes = await getPermissionsForRole(decoded.role);
      const rolesForPermission = await getRolesForPermission(
        permissaoRequerida
      );

      // Anexa informações ao req.user
      req.user = {
        ...decoded,
        permissions: permissoes,
        rolesForPermission,
      };

      if (!permissoes.includes(permissaoRequerida)) {
        return next(new AppError("Permissão negada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

// Middleware para verificar múltiplas permissões (pelo menos uma é necessária)
export const verificarPermissoes = (permissoesRequeridas: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const [, token] = authHeader.split(" ");

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      const permissoes = await getPermissionsForRole(decoded.role);

      // Obtém funções para todas as permissões requeridas
      const rolesForPermissions: { [key: string]: string[] } = {};
      for (const perm of permissoesRequeridas) {
        rolesForPermissions[perm] = await getRolesForPermission(perm);
      }

      // Anexa informações ao req.user
      req.user = {
        ...decoded,
        permissions: permissoes,
        rolesForPermissions,
      };

      const hasPermission = permissoesRequeridas.some((permissao) =>
        permissoes.includes(permissao)
      );

      if (!hasPermission) {
        return next(new AppError("Permissão negada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

// Middleware para verificar uma função específica
export const verificarRole = (roleRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const [, token] = authHeader.split(" ");

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;
      req.user = decoded;

      if (decoded.role !== roleRequerida) {
        return next(new AppError("Função requerida não encontrada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

// Middleware para verificar se a função está em uma lista de funções
export const verificarRoles = (rolesRequeridas: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const [, token] = authHeader.split(" ");

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;
      req.user = decoded;

      if (!rolesRequeridas.includes(decoded.role)) {
        return next(new AppError("Nenhuma função requerida encontrada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

// Exportar funções auxiliares para uso em rotas ou outros contextos
export { getPermissionsForRole, getRolesForPermission };
