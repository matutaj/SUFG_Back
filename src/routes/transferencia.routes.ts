import { Router } from "express";
import { CriarTransferenciaController } from "../model/transferencias/casoDeUso/criarTransferencia/CriarTransferenciaController";
import { ListarTodasTransferenciasController } from "../model/transferencias/casoDeUso/listarTodasTransferencias/ListarTodasTransferenciasController";

const transferenciaRouter = Router();

const criarTransferencia = new CriarTransferenciaController();
const listarTodasTransferencias = new ListarTodasTransferenciasController();

transferenciaRouter.get("/", listarTodasTransferencias.handle);
transferenciaRouter.post("/", criarTransferencia.handle);

export { transferenciaRouter };