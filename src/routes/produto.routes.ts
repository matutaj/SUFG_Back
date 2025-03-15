import { Router } from "express";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();

produtoRouter.post("/", criarProduto.handle);

export { produtoRouter };