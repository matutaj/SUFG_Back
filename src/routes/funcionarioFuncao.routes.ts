import { Router } from "express";

import { CriarFuncionarioFuncaoController } from "../model/funcionariosFuncoes/casoDeUso/criarFuncionarioFuncao/CriarFuncionarioFuncaoController";
import { AtualizarFuncionarioFuncaoController } from "../model/funcionariosFuncoes/casoDeUso/atualizarFuncionarioFuncao/AtualizarFuncionarioFuncaoController";
import { ListarUmFuncionarioPeloIdController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloId/ListarFuncionarioPeloIdController";
import { ListarTodosFuncionariosFuncoesController } from "../model/funcionariosFuncoes/casoDeUso/listarTodosFuncionariosFuncoes/ListarTodosFuncionariosFuncoesController";
import { DeleteFuncionarioFuncaoController } from "../model/funcionariosFuncoes/casoDeUso/eliminarFuncionarioFuncao/EliminarFuncionarioFuncaoController";

const funcionarioFuncaoRoutes = Router();

const criarFuncionarioFuncao = new CriarFuncionarioFuncaoController();
const atualizarFuncionarioFuncao = new AtualizarFuncionarioFuncaoController();
const listarUmFuncionarioPeloId = new ListarUmFuncionarioPeloIdController();
const listarTodosFuncionariosFuncoes = new ListarTodosFuncionariosFuncoesController();
const deleteFuncionarioFuncao = new DeleteFuncionarioFuncaoController();

funcionarioFuncaoRoutes.post("/", criarFuncionarioFuncao.handle);
funcionarioFuncaoRoutes.put("/:id", atualizarFuncionarioFuncao.handle);
funcionarioFuncaoRoutes.get("/:id", listarUmFuncionarioPeloId.handle);
funcionarioFuncaoRoutes.get("/", listarTodosFuncionariosFuncoes.handle);
funcionarioFuncaoRoutes.delete("/:id", deleteFuncionarioFuncao.handle);

export { funcionarioFuncaoRoutes };