import { Router } from "express";

import { CriarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/criarProdutoLocalizacao/CriarProdutoLocalizacaoController";
import { AtualizarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/atualizarProdutoLocalizacao/AtualizarProdutoLocalizacaoController";
import { ListarUmProdutoLocalizacaoPorIdController } from "../model/produtosLocalizacoes/casoDeUso/listarProdutoLocalizacaoPeloId/ListarProdutoLocalizacaoPeloIdController";
import { ListarTodosProdutosLocalizacoesController } from "../model/produtosLocalizacoes/casoDeUso/listarTodosProdutosLocalizacoes/ListarTodosProdutosLocalizacoesController";
import { DeleteProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/deleteProdutoLocalizacao/DeleteProdutoLocalizacaoController";

const produtoLocalizacaoRouter = Router();

const criarProdutoLocalizacao = new CriarProdutoLocalizacaoController();
const atualizarProdutoLocalizacao = new AtualizarProdutoLocalizacaoController();
const listarUmProdutoLocalizacaoPorId = new ListarUmProdutoLocalizacaoPorIdController();
const listarTodosProdutosLocalizacoes = new ListarTodosProdutosLocalizacoesController();
const deleteProdutoLocalizacao = new DeleteProdutoLocalizacaoController();

produtoLocalizacaoRouter.post("/", criarProdutoLocalizacao.handle);
produtoLocalizacaoRouter.put("/:id", atualizarProdutoLocalizacao.handle);
produtoLocalizacaoRouter.get("/:id", listarUmProdutoLocalizacaoPorId.handle);
produtoLocalizacaoRouter.get("/", listarTodosProdutosLocalizacoes.handle);
produtoLocalizacaoRouter.delete("/:id", deleteProdutoLocalizacao.handle);

export { produtoLocalizacaoRouter };
