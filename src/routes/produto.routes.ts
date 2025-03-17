import { Router } from "express";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";
import { ListarTodosProdutosController } from "../model/produtos/casoDeUso/listarTodosProdutos/ListarTodosProdutosController";
import { ListarProdutoPeloNomeController } from "../model/produtos/casoDeUso/listarProdutoPeloNome/ListarProdutoPeloNomeController";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();
const listarTodosProdutos = new ListarTodosProdutosController();
const listarProdutoPeloNome = new ListarProdutoPeloNomeController();

produtoRouter.get("/", listarTodosProdutos.handle);
produtoRouter.get("/:nomeProduto", listarProdutoPeloNome.handle);
produtoRouter.post("/", criarProduto.handle);

export { produtoRouter };