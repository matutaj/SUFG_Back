import { Request, Response, NextFunction } from "express";
import { redisClient } from "../server";

export const cacheMiddleware = (cacheKeyPrefix: string, ttl: number = 2000) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const cacheKey = `${cacheKeyPrefix}:${req.originalUrl.replace(/\/$/, "")}`;

    try {
      const cachedData = await redisClient.get(cacheKey);
      if (cachedData) {
        console.log(`Dados recuperados do cache Redis para ${cacheKey}`);
        res.json(JSON.parse(cachedData));
        return;
      }

      const originalJson = res.json;
      res.json = function (data) {
        redisClient
          .setEx(cacheKey, ttl, JSON.stringify(data))
          .catch((err) =>
            console.error(`Erro ao armazenar no Redis para ${cacheKey}:`, err)
          );
        return originalJson.call(this, data);
      };

      next();
    } catch (err) {
      console.error(`Erro ao acessar Redis para ${cacheKey}:`, err);
      next();
    }
  };
};
