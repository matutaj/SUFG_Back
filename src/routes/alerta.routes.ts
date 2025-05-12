import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarAlertaController } from "../model/alertas/casoDeUso/criarAlerta/CriarAlertaController";
import { ListarTodosAlertasController } from "../model/alertas/casoDeUso/listarTodosAlertas/ListarTodosAlertasController";
import { ListarAlertaPeloNomeController } from "../model/alertas/casoDeUso/listarAlertaPeloNome/ListarAlertaPeloNomeController";
import { AtualizarAlertaController } from "../model/alertas/casoDeUso/atualizarAlerta/AtualizarAlertaController";
import { DeleteAlertaController } from "../model/alertas/casoDeUso/deleteAlerta/DeleteAlertaControoller";
import { ListarUmAlertaPeloIdController } from "../model/alertas/casoDeUso/listarAlertaPeloId/ListarAlertaPeloIdController";
import { verificarPermissao } from "../middlewares/permissoes";

const alertaRoutes = Router();

const criarAlerta = new CriarAlertaController();
const listarTodosAlertas = new ListarTodosAlertasController();
const listarAlertaPeloNome = new ListarAlertaPeloNomeController();
const atualizarAlerta = new AtualizarAlertaController();
const deleteAlerta = new DeleteAlertaController();
const listarAlertaPeloId = new ListarUmAlertaPeloIdController();

alertaRoutes.get(
  "/",
  verificarPermissao("listar_alerta"),
  cacheMiddleware("alertas"),
  listarTodosAlertas.handle
);

alertaRoutes.get(
  "/:id",
  verificarPermissao("listar_alerta"),
  cacheMiddleware("alertas"),
  listarAlertaPeloId.handle
);

alertaRoutes.get(
  "/nome/:nomeAlerta",
  verificarPermissao("listar_alerta"),
  cacheMiddleware("alertas"),
  listarAlertaPeloNome.handle
);

alertaRoutes.post("/", verificarPermissao("criar_alerta"), async (req, res) => {
  const result = await criarAlerta.handle(req, res);
  await redisClient
    .del("alertas:/alerta")
    .catch((err) => console.error("Erro ao invalidar cache:", err));
  return result;
});

alertaRoutes.put(
  "/:id",
  verificarPermissao("atualizar_alerta"),
  async (req, res) => {
    const result = await atualizarAlerta.handle(req, res);
    await Promise.all([
      redisClient.del("alertas:/alerta"),
      redisClient.del(`alertas:/alerta/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

alertaRoutes.delete(
  "/:id",
  verificarPermissao("eliminar_alerta"),
  async (req, res) => {
    const result = await deleteAlerta.handle(req, res);
    await Promise.all([
      redisClient.del("alertas:/alerta"),
      redisClient.del(`alertas:/alerta/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { alertaRoutes };
