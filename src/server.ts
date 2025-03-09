import express from "express";
import { Request, Response, NextFunction } from "express";
//import cors from "cors";
//import { routes } from "./routes";

const app = express();

app.use(express.json());

// Configuração correta do CORS
/* app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
); */

// Middleware para configurar headers CORS (opcional)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//app.use(routes);

app.listen(3000, () => {
  console.log("SUFG_back rodando! ✔✔");
});
