import { Router } from "express";
import { RelatorioControlador } from "../model/relatorio/casoDeUso/listarRelatorios/ListarRelatorioController";

const relatorioRouter = Router();
const relatorioControlador = new RelatorioControlador();

relatorioRouter.get("/:endpoint", relatorioControlador.handle);

export { relatorioRouter };
