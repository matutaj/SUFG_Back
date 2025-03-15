import { Router } from "express";
import { CriarTransferenciaController } from "../model/transferencias/casoDeUso/criarTransferencia/CriarTransferenciaController";

const transferenciaRouter = Router();

const criarTransferencia = new CriarTransferenciaController();

transferenciaRouter.post("/", criarTransferencia.handle);

export { transferenciaRouter };