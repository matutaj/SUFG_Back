import { Router } from "express";
import { RelatorioControlador } from "../model/relatorio/casoDeUso/listarRelatorios/ListarRelatorioController";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const relatorioRouter = Router();
const relatorioControlador = new RelatorioControlador();

relatorioRouter.get(
  "/:endpoint",
  cacheMiddleware("relatorios"),
  relatorioControlador.handle
);

export { relatorioRouter };
