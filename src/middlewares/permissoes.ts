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
}

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}

// Função para obter permissões associadas à função do usuário
async function getPermissionsForRole(role: string): Promise<string[]> {
  // Buscar a função pelo nome
  const funcao = await prisma.funcoes.findFirst({
    where: { nome: role },
    select: { id: true },
  });

  if (!funcao) {
    return []; // Retorna vazio se a função não existir
  }

  // Buscar permissões associadas à função na tabela funcoesPermissoes
  const permissoes = await prisma.funcoesPermissoes.findMany({
    where: { id_funcao: funcao.id },
    include: { Permissoes: true },
  });

  // Retornar os nomes das permissões
  return permissoes.map((p) => p.Permissoes.nome);
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
      req.user = decoded;

      const permissoes = await getPermissionsForRole(decoded.role);

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
      req.user = decoded;

      const permissoes = await getPermissionsForRole(decoded.role);

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
