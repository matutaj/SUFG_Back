import { Router } from "express";
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

tarefaRouter.post(
  "/",
  verificarPermissao("criar_tarefa"),
  criarTarefaController.handle
);
tarefaRouter.get(
  "/",
  verificarPermissao("listar_tarefa"),
  listarTodasTarefasController.handle
);
tarefaRouter.get(
  "/:id",
  verificarPermissao("listar_tarefa"),
  listarTarefaPeloIdController.handle
);
tarefaRouter.put(
  "/:id",
  verificarPermissao("atualizar_tarefa"),
  atualizarTarefaController.handle
);
tarefaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_tarefa"),
  eliminarTarefaController.handle
);

export { tarefaRouter };
