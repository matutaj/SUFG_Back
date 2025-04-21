import { Router } from "express";
import { CriarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/criarFuncionarioTarefa/CriarFuncionarioTarefaController";
import { ListarTodosFuncionariosTarefasController } from "../model/funcionariosTarefas/casoDeUso/listarTodosFuncionariosTarefas/ListarTodosFuncionariosTarefasController";
import { ListarUmFuncionarioTarefaPeloIdController } from "../model/funcionariosTarefas/casoDeUso/listarFuncionarioTarefaPeloId/ListarFuncionarioTarefaPeloIdController";
import { AtualizarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/atualizarFuncionarioTarefa/AtualizarFuncionarioTarefaController";
import { DeleteFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/deleteFuncionarioTarefa/DeleteFuncionarioTarefaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
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

funcionarioTarefaRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_funcionario_tarefa"),
  criarFuncionarioTarefaController.handle
);
funcionarioTarefaRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_funcionario_tarefa"),
  listarTodosFuncionariosTarefasController.handle
);
funcionarioTarefaRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_funcionario_tarefa"),
  listarUmFuncionarioTarefaPeloIdController.handle
);
funcionarioTarefaRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_funcionario_tarefa"),
  atualizarFuncionarioTarefaController.handle
);
funcionarioTarefaRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_funcionario_tarefa"),
  eliminarFuncionarioTarefaController.handle
);

export { funcionarioTarefaRouter };
