import { Router } from "express";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";
import { ListarTodosProdutosController } from "../model/produtos/casoDeUso/listarTodosProdutos/ListarTodosProdutosController";
import { ListarProdutoPeloNomeController } from "../model/produtos/casoDeUso/listarProdutoPeloNome/ListarProdutoPeloNomeController";
import { AtualizarProdutoController } from "../model/produtos/casoDeUso/atualizarProduto/AtualizarProdutoController";
import { DeleteProdutoController } from "../model/produtos/casoDeUso/deleteProduto/DeleteProdutoController";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();
const atualizarProduto = new AtualizarProdutoController();
const deleteProduto = new DeleteProdutoController();
const listarTodosProdutos = new ListarTodosProdutosController();
const listarProdutoPeloNome = new ListarProdutoPeloNomeController();

produtoRouter.get("/", listarTodosProdutos.handle);
produtoRouter.put("/", atualizarProduto.handle);
produtoRouter.delete("/", deleteProduto.handle);
produtoRouter.get("/:nomeProduto", listarProdutoPeloNome.handle);
produtoRouter.post("/", criarProduto.handle);

export { produtoRouter };