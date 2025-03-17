import { Router } from "express";

import { CriarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/criarProdutoLocalizacao/CriarProdutoLocalizacaoController";

const produtoLocalizacaoRouter = Router();

const criarProdutoLocalizacao = new CriarProdutoLocalizacaoController();

produtoLocalizacaoRouter.post("/", criarProdutoLocalizacao.handle);

export { produtoLocalizacaoRouter };
