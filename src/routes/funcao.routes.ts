import { Router } from "express";
import { CriarFuncaoController } from "../model/funcoes/casoDeUso/criarFuncao/CriarFuncaoController";
import { ListarTodasFuncoesController } from "../model/funcoes/casoDeUso/listarTodasFuncoes/ListarTodasFuncoesController";
import { ListarFuncaoPeloNomeController } from "../model/funcoes/casoDeUso/listarFuncaoPeloNome/ListarFuncaoPeloNomeController";
const funcaoRouter = Router();

const criarFuncao = new CriarFuncaoController();
const listarFuncaoPeloNome = new ListarFuncaoPeloNomeController();
const listarTodasFuncoes = new ListarTodasFuncoesController();

funcaoRouter.get("/", listarTodasFuncoes.handle);
funcaoRouter.get("/:nomeFuncao", listarFuncaoPeloNome.handle);
funcaoRouter.post("/", criarFuncao.handle);

export { funcaoRouter };