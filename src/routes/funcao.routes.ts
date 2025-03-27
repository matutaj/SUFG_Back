import { Router } from "express";
import { CriarFuncaoController } from "../model/funcoes/casoDeUso/criarFuncao/CriarFuncaoController";
import { ListarTodasFuncoesController } from "../model/funcoes/casoDeUso/listarTodasFuncoes/ListarTodasFuncoesController";
import { ListarFuncaoPeloNomeController } from "../model/funcoes/casoDeUso/listarFuncaoPeloNome/ListarFuncaoPeloNomeController";
import { AtualizarFuncaoController } from "../model/funcoes/casoDeUso/atualizarFuncao/AtualizarFuncaoController";
import { DeleteFuncaoController } from "../model/funcoes/casoDeUso/deleteFuncao/DeleteFuncaoController";
import { ListarFuncaoPeloIdController } from "../model/funcoes/casoDeUso/listarFuncaoPeloId/ListarFuncaoPeloIdController";  

const funcaoRouter = Router();

const criarFuncao = new CriarFuncaoController();
const listarFuncaoPeloId = new ListarFuncaoPeloIdController();
const atualizarFuncao = new AtualizarFuncaoController();
const deleteFuncao = new DeleteFuncaoController();
const listarFuncaoPeloNome = new ListarFuncaoPeloNomeController();
const listarTodasFuncoes = new ListarTodasFuncoesController();

funcaoRouter.get("/", listarTodasFuncoes.handle);
funcaoRouter.get("/:id", listarFuncaoPeloId.handle);
funcaoRouter.put("/:id", atualizarFuncao.handle);
funcaoRouter.delete("/:id", deleteFuncao.handle);
funcaoRouter.get("/:nomeFuncao", listarFuncaoPeloNome.handle);
funcaoRouter.post("/", criarFuncao.handle);

export { funcaoRouter };