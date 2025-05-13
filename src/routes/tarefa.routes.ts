import { Router } from "express";
//import { redisClient } from "../server";
import { CriarTarefaController } from "../model/tarefas/casoDeUso/criarTarefa/CriarTarefaController";
import { ListarTodasTarefasController } from "../model/tarefas/casoDeUso/listarTodasTarefas/ListarTodasTarefasController";
import { ListarTarefaPeloIdController } from "../model/tarefas/casoDeUso/listarTarefaPeloId/ListarTarefaPeloIdController";
import { ListarTarefaPeloNomeController } from "../model/tarefas/casoDeUso/listarTarefaPeloNome/ListarTarefaPeloNomeController";
import { AtualizarTarefaController } from "../model/tarefas/casoDeUso/atualizarTarefa/AtualizarTarefaController";
import { DeleteTarefaController } from "../model/tarefas/casoDeUso/deleteTarefa/DeleteTarefaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const tarefaRouter = Router();

const criarTarefaController = new CriarTarefaController();
const listarTodasTarefasController = new ListarTodasTarefasController();
const listarTarefaPeloIdController = new ListarTarefaPeloIdController();
const listarTarefaPeloNomeController = new ListarTarefaPeloNomeController();
const atualizarTarefaController = new AtualizarTarefaController();
const eliminarTarefaController = new DeleteTarefaController();

tarefaRouter.get(
  "/",
  verificarPermissao("listar_tarefa"),
  // cacheMiddleware("tarefas"),
  listarTodasTarefasController.handle
);

tarefaRouter.get(
  "/:id",
  verificarPermissao("listar_tarefa"),
  //cacheMiddleware("tarefas"),
  listarTarefaPeloIdController.handle
);

tarefaRouter.post(
  "/",
  verificarPermissao("criar_tarefa") /*  async (req, res) => {
  const result = await criarTarefaController.handle(req, res);
  await redisClient.del("tarefas:/tarefa");
  //.catch((err) => console.error("Erro ao invalidar cache:", err));
  return result;
} */
);

tarefaRouter.put(
  "/:id",
  verificarPermissao("atualizar_tarefa")
  /*   async (req, res) => {
    const result = await atualizarTarefaController.handle(req, res);
    await Promise.all([
      redisClient.del("tarefas:/tarefa"),
      redisClient.del(`tarefas:/tarefa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

tarefaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_tarefa")
  /*   async (req, res) => {
    const result = await eliminarTarefaController.handle(req, res);
    await Promise.all([
      redisClient.del("tarefas:/tarefa"),
      redisClient.del(`tarefas:/tarefa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { tarefaRouter };
