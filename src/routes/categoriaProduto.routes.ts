import { Router } from "express";

import { CriarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/CriarCategoriaProdutoController";

const categoriaProdutoRouter = Router();

const criarCategoriaProduto = new CriarCategoriaProdutoController();

categoriaProdutoRouter.post("/", criarCategoriaProduto.handle);

export { categoriaProdutoRouter };
