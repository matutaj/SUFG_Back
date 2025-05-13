import { Router } from "express";
import { redisClient } from "../server";
import { CriarTransferenciaController } from "../model/transferencias/casoDeUso/criarTransferencia/CriarTransferenciaController";
import { ListarTodasTransferenciasController } from "../model/transferencias/casoDeUso/listarTodasTransferencias/ListarTodasTransferenciasController";
import { AtualizarTransferenciaController } from "../model/transferencias/casoDeUso/atualizarTransferencia/AtualizarTransferenciaController";
import { ListarUmaTransferenciaPorIdController } from "../model/transferencias/casoDeUso/listarTransferenciaPeloId/ListarTransferenciaPeloIdController";
import { DeleteTransferenciaController } from "../model/transferencias/casoDeUso/eliminarTransferencia/EliminarTransferenciaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const transferenciaRouter = Router();

const criarTransferencia = new CriarTransferenciaController();
const atualizarTransferencia = new AtualizarTransferenciaController();
const listarTransferenciaPeloId = new ListarUmaTransferenciaPorIdController();
const eliminarTransferencia = new DeleteTransferenciaController();
const listarTodasTransferencias = new ListarTodasTransferenciasController();

transferenciaRouter.get(
  "/",
  verificarPermissao("listar_transferencia"),
  cacheMiddleware("transferencias"),
  listarTodasTransferencias.handle
);

transferenciaRouter.get(
  "/:id",
  verificarPermissao("listar_transferencia"),
  cacheMiddleware("transferencias"),
  listarTransferenciaPeloId.handle
);

transferenciaRouter.post(
  "/",
  verificarPermissao("criar_transferencia"),
  async (req, res) => {
    const result = await criarTransferencia.handle(req, res);
    await redisClient.del("transferencias:/transferencia");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

transferenciaRouter.put(
  "/:id",
  verificarPermissao("atualizar_transferencia"),
  async (req, res) => {
    const result = await atualizarTransferencia.handle(req, res);
    await Promise.all([
      redisClient.del("transferencias:/transferencia"),
      redisClient.del(`transferencias:/transferencia/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

transferenciaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_transferencia"),
  async (req, res) => {
    const result = await eliminarTransferencia.handle(req, res);
    await Promise.all([
      redisClient.del("transferencias:/transferencia"),
      redisClient.del(`transferencias:/transferencia/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { transferenciaRouter };
