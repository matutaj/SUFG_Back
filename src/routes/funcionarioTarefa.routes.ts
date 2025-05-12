import { Router } from "express";
import { redisClient } from "../server";
import { CriarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/criarFuncionarioTarefa/CriarFuncionarioTarefaController";
import { ListarTodosFuncionariosTarefasController } from "../model/funcionariosTarefas/casoDeUso/listarTodosFuncionariosTarefas/ListarTodosFuncionariosTarefasController";
import { ListarUmFuncionarioTarefaPeloIdController } from "../model/funcionariosTarefas/casoDeUso/listarFuncionarioTarefaPeloId/ListarFuncionarioTarefaPeloIdController";
import { AtualizarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/atualizarFuncionarioTarefa/AtualizarFuncionarioTarefaController";
import { DeleteFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/deleteFuncionarioTarefa/DeleteFuncionarioTarefaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const funcionarioTarefaRouter = Router();

const criarFuncionarioTarefaController = new CriarFuncionarioTarefaController();
const listarTodosFuncionariosTarefasController =
  new ListarTodosFuncionariosTarefasController();
const listarUmFuncionarioTarefaPeloIdController =
  new ListarUmFuncionarioTarefaPeloIdController();
const atualizarFuncionarioTarefaController =
  new AtualizarFuncionarioTarefaController();
const eliminarFuncionarioTarefaController =
  new DeleteFuncionarioTarefaController();

// Rotas com cacheMiddleware para GET
funcionarioTarefaRouter.get(
  "/",
  verificarPermissao("listar_funcionario_tarefa"),
  cacheMiddleware("funcionarios_tarefas"),
  listarTodosFuncionariosTarefasController.handle
);

funcionarioTarefaRouter.get(
  "/:id",
  verificarPermissao("listar_funcionario_tarefa"),
  cacheMiddleware("funcionarios_tarefas"),
  listarUmFuncionarioTarefaPeloIdController.handle
);

// Rota POST com invalidação de cache
funcionarioTarefaRouter.post(
  "/",
  verificarPermissao("criar_funcionario_tarefa"),
  async (req, res) => {
    const result = await criarFuncionarioTarefaController.handle(req, res);
    await redisClient
      .del("funcionarios_tarefas:/funcionario_tarefa")
      .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

// Rota PUT com invalidação de cache
funcionarioTarefaRouter.put(
  "/:id",
  verificarPermissao("atualizar_funcionario_tarefa"),
  async (req, res) => {
    const result = await atualizarFuncionarioTarefaController.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios_tarefas:/funcionario_tarefa"),
      redisClient.del(
        `funcionarios_tarefas:/funcionario_tarefa/${req.params.id}`
      ),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcionarioTarefaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_funcionario_tarefa"),
  async (req, res) => {
    const result = await eliminarFuncionarioTarefaController.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios_tarefas:/funcionario_tarefa"),
      redisClient.del(
        `funcionarios_tarefas:/funcionario_tarefa/${req.params.id}`
      ),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { funcionarioTarefaRouter };
