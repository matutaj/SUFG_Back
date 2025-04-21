import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";
import { AppError } from "../errors/AppError";

interface JwtPayload {
  userId: string;
  email: string;
  roles: string[];
  permissoes: string[];
  iat: number;
  exp: number;
}

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}

// Middleware para verificar uma única permissão
export const verificarPermissao = (permissaoRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      if (!decoded.permissoes.includes(permissaoRequerida)) {
        return next(new AppError("Permissão negada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

export const verificarPermissoes = (permissoesRequeridas: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      const hasPermission = permissoesRequeridas.some((permissao) =>
        decoded.permissoes.includes(permissao)
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

export const verificarRole = (roleRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      if (!decoded.roles.includes(roleRequerida)) {
        return next(new AppError("Função requerida não encontrada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};

export const verificarRoles = (rolesRequeridas: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return next(new AppError("Token não fornecido", 401));
      }

      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      const hasRole = rolesRequeridas.some((role) =>
        decoded.roles.includes(role)
      );

      if (!hasRole) {
        return next(new AppError("Nenhuma função requerida encontrada", 403));
      }

      next();
    } catch (error) {
      return next(new AppError("Token inválido ou expirado", 401));
    }
  };
};
