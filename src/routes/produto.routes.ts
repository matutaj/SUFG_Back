import { Router } from "express";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";
import { ListarTodosProdutosController } from "../model/produtos/casoDeUso/listarTodosProdutos/ListarTodosProdutosController";
import { ListarProdutoPeloNomeController } from "../model/produtos/casoDeUso/listarProdutoPeloNome/ListarProdutoPeloNomeController";
import { AtualizarProdutoController } from "../model/produtos/casoDeUso/atualizarProduto/AtualizarProdutoController";
import { DeleteProdutoController } from "../model/produtos/casoDeUso/deleteProduto/DeleteProdutoController";
import { ListarUmProdutoPorIdController } from "../model/produtos/casoDeUso/listarProdutoPeloId/ListarProdutoPeloIdController";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();
const listarProdutoPeloId = new ListarUmProdutoPorIdController();
const atualizarProduto = new AtualizarProdutoController();
const deleteProduto = new DeleteProdutoController();
const listarTodosProdutos = new ListarTodosProdutosController();
const listarProdutoPeloNome = new ListarProdutoPeloNomeController();

produtoRouter.get("/", listarTodosProdutos.handle);
produtoRouter.get("/:id", listarProdutoPeloId.handle);
produtoRouter.put("/:id", atualizarProduto.handle);
produtoRouter.delete("/:id", deleteProduto.handle);
produtoRouter.get("/:nomeProduto", listarProdutoPeloNome.handle);
produtoRouter.post("/", criarProduto.handle);

export { produtoRouter };
