import { Router } from "express";
import { CriarFuncionarioPermissaoController } from "../model/FuncionariosPermissoes/casoDeUso/criarFuncionarioPermissao/CriarFuncionarioPermissaoController";
import { DeleteFuncionarioPermissaoController } from "../model/FuncionariosPermissoes/casoDeUso/eliminarFuncionarioPermissao/EliminarFuncionarioPermissaoController";
import { ListarTodosFuncionariosPermissoesController } from "../model/FuncionariosPermissoes/casoDeUso/listarTodosFuncionariosPermissoes/ListarTodosFuncionariosPermissoesController";
import { AtualizarFuncionarioPermissaoController } from "../model/FuncionariosPermissoes/casoDeUso/atualizarFuncionarioPermissao/AtualizarFuncionarioPermissaoController";
import { ListarUmFuncionarioPermissaoPeloIdController } from "../model/FuncionariosPermissoes/casoDeUso/listarUmFuncionarioPermissaoPeloId/ListarUmFuncionarioPermissaoPeloIdController";

const funcionarioPermissaoRoutes = Router();

const criarFuncionarioPermissao = new CriarFuncionarioPermissaoController();
const listarTodosFuncionariosPermissoes =
  new ListarTodosFuncionariosPermissoesController();
const listarUmFuncionarioPermissaoPeloId =
  new ListarUmFuncionarioPermissaoPeloIdController();
const atualizarFuncionarioPermissao =
  new AtualizarFuncionarioPermissaoController();
const deleteFuncionarioPermissao = new DeleteFuncionarioPermissaoController();

funcionarioPermissaoRoutes.post("/", criarFuncionarioPermissao.handle);
funcionarioPermissaoRoutes.get("/", listarTodosFuncionariosPermissoes.handle);
funcionarioPermissaoRoutes.get(
  "/:id",
  listarUmFuncionarioPermissaoPeloId.handle
);
funcionarioPermissaoRoutes.put("/:id", atualizarFuncionarioPermissao.handle);
funcionarioPermissaoRoutes.delete("/:id", deleteFuncionarioPermissao.handle);

export { funcionarioPermissaoRoutes };
