// src/middleware/permissoesMiddleware.ts
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

export const verificarPermissao = (permissaoRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token não fornecido", 401);
    }

    const token = authHeader.split(" ")[1]; // Assume "Bearer <token>"

    try {
      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      // Verificar se a permissão requerida está no array de permissões do usuário
      if (!decoded.permissoes.includes(permissaoRequerida)) {
        throw new AppError("Permissão negada", 403);
      }

      next();
    } catch (error) {
      throw new AppError("Token inválido ou expirado", 401);
    }
  };
};

export const verificarRole = (roleRequerida: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token não fornecido", 401);
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, authConfig.key) as JwtPayload;

      req.user = decoded;

      // Verificar se a role requerida está no array de roles do usuário
      if (!decoded.roles.includes(roleRequerida)) {
        throw new AppError("Função requerida não encontrada", 403);
      }

      next();
    } catch (error) {
      throw new AppError("Token inválido ou expirado", 401);
    }
  };
};
