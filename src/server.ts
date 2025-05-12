import express from "express";
import "express-async-errors";
import { Request, Response, NextFunction } from "express";
import { createClient } from "redis";
import cors from "cors";
import { routes } from "./routes";
import * as dotenv from "dotenv";
dotenv.config();

import AppErrorHandler from "./errors/errorhandler";

const app = express();

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err) => console.log("Erro no Redis:", err));
redisClient.on("connect", () => console.log("Conectado ao Redis!"));

redisClient
  .connect()
  .catch((err) => console.error("Erro ao conectar ao Redis:", err));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(routes);

app.use(AppErrorHandler);

app.listen(3333, () => {
  console.log("SUFG_back rodando! ✔✔");
});

export { redisClient };
