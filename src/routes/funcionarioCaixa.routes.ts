import { Router } from "express";
import { CriarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/criarFuncionarioCaixa/CriarFuncionarioCaixaController";
import { DeleteFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/deleteFuncionarioCaixa/DeleteFuncionarioCaixaController";
import { ListarUmFuncionarioCaixaPelaAberturaController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPelaAbertura/ListarUmFuncionarioCaixaPelaAberturaController";
import { ListarEstadoCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarEstadoCaixa/ListarEstadoCaixaController";
import { ListarUmFuncionarioCaixaPeloIdController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPeloID/ListarUmFuncionarioCaixaPeloIDController";
import { AtualizarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/atualizarFuncionarioCaixa/AtualizarFuncionarioCaixaController";
import { ListarTodosFuncionariosCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarTodosFuncionariosCaixa/ListarTodosFuncionariosCaixaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
const funcionariorCaixaRouter = Router();

const criarFuncionarioCaixa = new CriarFuncionarioCaixaController();
const deleteFuncionarioCaixa = new DeleteFuncionarioCaixaController();
const listarTodosFuncionariosCaixa =
  new ListarTodosFuncionariosCaixaController();
const atualizarFuncionarioCaixa = new AtualizarFuncionarioCaixaController();
const listarUmFuncionarioCaixaPeloId =
  new ListarUmFuncionarioCaixaPeloIdController();
const listarEstadoCaixa = new ListarEstadoCaixaController();
const listarUmFuncionarioCaixaPelaAbertura =
  new ListarUmFuncionarioCaixaPelaAberturaController();

funcionariorCaixaRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("criar_funcionario_caixa"),
  criarFuncionarioCaixa.handle
);
funcionariorCaixaRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_funcionario_caixa"),
  listarTodosFuncionariosCaixa.handle
);
funcionariorCaixaRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_funcionario_caixa"),
  listarUmFuncionarioCaixaPeloId.handle
);
funcionariorCaixaRouter.get(
  "/:abertura",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_funcionario_caixa"),
  listarUmFuncionarioCaixaPelaAbertura.handle
);
funcionariorCaixaRouter.get(
  "/:estado",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_funcionario_caixa"),
  listarEstadoCaixa.handle
);
funcionariorCaixaRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("atualizar_funcionario_caixa"),
  atualizarFuncionarioCaixa.handle
);
funcionariorCaixaRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("eliminar_funcionario_caixa"),
  deleteFuncionarioCaixa.handle
);

export { funcionariorCaixaRouter };
