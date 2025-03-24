import { Router } from "express";

import { CriarFuncionarioPermissaoController } from "../model/funcionariosPermissoes/casoDeUso/criarFuncionarioPermissao/CriarFuncionarioPermissaoController";
import { ListarTodosFuncionariosPermissoesController } from "../model/funcionariosPermissoes/casoDeUso/listarTodosFuncionariosPermissoes/ListarTodosFuncionariosPermissoesController";
import { ListarUmFuncionarioPermissaoPeloIdController } from "../model/funcionariosPermissoes/casoDeUso/listarUmFuncionarioPermissaoPeloId/ListarUmFuncionarioPermissaoPeloIdController";
import { AtualizarFuncionarioPermissaoController } from "../model/funcionariosPermissoes/casoDeUso/atualizarFuncionarioPermissao/AtualizarFuncionarioPermissaoController";
import { DeleteFuncionarioPermissaoController } from "../model/funcionariosPermissoes/casoDeUso/eliminarFuncionarioPermissao/EliminarFuncionarioPermissaoController";   

const funcionarioPermissaoRoutes = Router();

const criarFuncionarioPermissao = new CriarFuncionarioPermissaoController();
const listarTodosFuncionariosPermissoes = new ListarTodosFuncionariosPermissoesController();
const listarUmFuncionarioPermissaoPeloId = new ListarUmFuncionarioPermissaoPeloIdController();  
const atualizarFuncionarioPermissao = new AtualizarFuncionarioPermissaoController();
const deleteFuncionarioPermissao = new DeleteFuncionarioPermissaoController();

funcionarioPermissaoRoutes.post("/", criarFuncionarioPermissao.handle);
funcionarioPermissaoRoutes.get("/", listarTodosFuncionariosPermissoes.handle);
funcionarioPermissaoRoutes.get("/:id", listarUmFuncionarioPermissaoPeloId.handle);
funcionarioPermissaoRoutes.put("/", atualizarFuncionarioPermissao.handle);
funcionarioPermissaoRoutes.delete("/:id", deleteFuncionarioPermissao.handle);

export { funcionarioPermissaoRoutes };