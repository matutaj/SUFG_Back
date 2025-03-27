import { Router } from "express";

import { CriarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/criarCategoriaProduto/CriarCategoriaProdutoController";
import { ListarCategoriaProdutoPeloNomeController } from "../model/categoriaProdutos/casoDeUso/listarCategoriaProdutoPeloNome/ListarCategoriaProdutoPeloNomeController";
import { ListarTodasCategoriasProdutosController } from "../model/categoriaProdutos/casoDeUso/listarTodasCategoriasProdutos/ListarTodasCategoriasProdutosController";
import { AtualizarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/atualizarCategoriaProduto/AtualizarCategoriaProdutoController";
import { DeleteCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/deleteCategoriaProduto/DeleteCategoriaProdutoController";
import { ListarUmaCategoriaProdutoPeloIdController } from "../model/categoriaProdutos/casoDeUso/listarCategoriaProdutoPeloId/ListarCategoriaProdutoPeloIdController";

const categoriaProdutoRouter = Router();

const listarTodasCategoriasProdutos = new ListarTodasCategoriasProdutosController();
const criarCategoriaProduto = new CriarCategoriaProdutoController();
const listarCategoriaProdutoPeloId = new ListarUmaCategoriaProdutoPeloIdController();
const listarCategoriaProduto = new ListarCategoriaProdutoPeloNomeController();
const atualizarCategoriaProduto = new AtualizarCategoriaProdutoController();
const deleteCategoriaProduto = new DeleteCategoriaProdutoController();

categoriaProdutoRouter.get("/", listarTodasCategoriasProdutos.handle);
categoriaProdutoRouter.get("/:id", listarCategoriaProdutoPeloId.handle);
categoriaProdutoRouter.put("/:id", atualizarCategoriaProduto.handle);
categoriaProdutoRouter.delete("/:id", deleteCategoriaProduto.handle);
categoriaProdutoRouter.get("/:nomeCategoria", listarCategoriaProduto.handle);
categoriaProdutoRouter.post("/", criarCategoriaProduto.handle);

export { categoriaProdutoRouter };
