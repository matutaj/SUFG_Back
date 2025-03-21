import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import { routes } from "./routes";
import "express-async-errors";

import AppErrorHandler from "./errors/errorhandler";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware para configurar headers CORS (opcional)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(routes);

app.use(AppErrorHandler);
app.listen(3000, () => {
  console.log("SUFG_back rodando! ✔✔");
});
