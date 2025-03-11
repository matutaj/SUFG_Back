import { Router } from "express";

import { CriarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/CriarCategoriaProdutoController";

const categoriaProdutoRoutes = Router();

const criarCategoriaProduto = new CriarCategoriaProdutoController();

categoriaProdutoRoutes.post("/", criarCategoriaProduto.handle);

export { categoriaProdutoRoutes };
