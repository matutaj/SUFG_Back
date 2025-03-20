import { Router } from "express";

import { CriarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/criarCategoriaProduto/CriarCategoriaProdutoController";
import { ListarCategoriaProdutoPeloNomeController } from "../model/categoriaProdutos/casoDeUso/listarCategoriaProdutoPeloNome/ListarCategoriaProdutoPeloNomeController";
import { ListarTodasCategoriasProdutosController } from "../model/categoriaProdutos/casoDeUso/listarTodasCategoriasProdutos/ListarTodasCategoriasProdutosController";
const categoriaProdutoRouter = Router();

const listarTodasCategoriasProdutos = new ListarTodasCategoriasProdutosController();

categoriaProdutoRouter.get("/", listarTodasCategoriasProdutos.handle);

const listarCategoriaProduto = new ListarCategoriaProdutoPeloNomeController();

categoriaProdutoRouter.get("/:nomeCategoria", listarCategoriaProduto.handle);
categoriaProdutoRouter.post("/", criarCategoriaProduto.handle);

export { categoriaProdutoRouter };
