import { Router } from "express";
import { CriarTransferenciaController } from "../model/transferencias/casoDeUso/criarTransferencia/CriarTransferenciaController";
import { ListarTodasTransferenciasController } from "../model/transferencias/casoDeUso/listarTodasTransferencias/ListarTodasTransferenciasController";
import { AtualizarTransferenciaController } from "../model/transferencias/casoDeUso/atualizarTransferencia/AtualizarTransferenciaController";
import { ListarUmaTransferenciaPorIdController } from "../model/transferencias/casoDeUso/listarTransferenciaPeloId/ListarTransferenciaPeloIdController";
import { DeleteTransferenciaController } from "../model/transferencias/casoDeUso/eliminarTransferencia/EliminarTransferenciaController";

const transferenciaRouter = Router();

const criarTransferencia = new CriarTransferenciaController();
const atualizarTransferencia = new AtualizarTransferenciaController();
const listarTransferenciaPeloId = new ListarUmaTransferenciaPorIdController();
const eliminarTransferencia = new DeleteTransferenciaController();
const listarTodasTransferencias = new ListarTodasTransferenciasController();

transferenciaRouter.get("/", listarTodasTransferencias.handle);
transferenciaRouter.get("/:id", listarTransferenciaPeloId.handle);
transferenciaRouter.put("/:id", atualizarTransferencia.handle);
transferenciaRouter.delete("/:id", eliminarTransferencia.handle);
transferenciaRouter.post("/", criarTransferencia.handle);

export { transferenciaRouter };