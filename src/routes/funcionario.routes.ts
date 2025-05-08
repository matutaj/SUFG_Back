import { Router } from "express";
import { criarFuncionarioController } from "../model/funcionarios/casoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/casoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";
import { AtualizarFuncionarioController } from "../model/funcionarios/casoDeUso/atualizarFuncionario/AtualizarFuncionarioController";
import { DeleteFuncionarioController } from "../model/funcionarios/casoDeUso/deleteFuncionario/DeleteFuncionarioController";
import { ListarUmFuncionarioPeloIdController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloId/ListarFuncionarioPeloIdController";
import { ListarEmailFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioEmail/ListarFuncionarioEmailController";
import { ListarTelefoneFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioTelefone/ListarFuncionarioTelefoneController";
import { ListarNumeroContribuinteFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioNumeroContribuinte/ListarFuncionarioNumeroContribuinteController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
const funcionarioRouter = Router();

const criarFuncionario = new criarFuncionarioController();
const listarFuncionarioPeloId = new ListarUmFuncionarioPeloIdController();
const listarFuncionarioEmail = new ListarEmailFuncionarioController();
const listarFuncionarioTelefone = new ListarTelefoneFuncionarioController();
const listarFuncionarioNumeroContribuinte =
  new ListarNumeroContribuinteFuncionarioController();
const atualizarFuncionario = new AtualizarFuncionarioController();
const deleteFuncionario = new DeleteFuncionarioController();
const listarFuncionarioPeloNome = new ListarFuncionarioPeloNomeController();
const listarTodosFuncionarios = new ListarTodosFuncionariosController();

funcionarioRouter.post(
  "/",
  verificarPermissao("criar_funcionario"),
  criarFuncionario.handle
);
funcionarioRouter.get(
  "/:id",
  verificarPermissao("listar_funcionario"),
  listarFuncionarioPeloId.handle
);
funcionarioRouter.get(
  "/:email",
  verificarPermissao("listar_funcionario"),
  listarFuncionarioEmail.handle
);
funcionarioRouter.put(
  "/:id",
  verificarPermissao("atualizar_funcionario"),
  atualizarFuncionario.handle
);
funcionarioRouter.delete(
  "/:id",
  verificarPermissao("eliminar_funcionario"),
  deleteFuncionario.handle
);
funcionarioRouter.get(
  "/",
  verificarPermissao("listar_funcionario"),
  listarTodosFuncionarios.handle
);

export { funcionarioRouter };
