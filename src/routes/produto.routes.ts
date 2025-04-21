import { Router } from "express";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";
import { ListarTodosProdutosController } from "../model/produtos/casoDeUso/listarTodosProdutos/ListarTodosProdutosController";
import { ListarProdutoPeloNomeController } from "../model/produtos/casoDeUso/listarProdutoPeloNome/ListarProdutoPeloNomeController";
import { AtualizarProdutoController } from "../model/produtos/casoDeUso/atualizarProduto/AtualizarProdutoController";
import { DeleteProdutoController } from "../model/produtos/casoDeUso/deleteProduto/DeleteProdutoController";
import { ListarUmProdutoPorIdController } from "../model/produtos/casoDeUso/listarProdutoPeloId/ListarProdutoPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();
const listarProdutoPeloId = new ListarUmProdutoPorIdController();
const atualizarProduto = new AtualizarProdutoController();
const deleteProduto = new DeleteProdutoController();
const listarTodosProdutos = new ListarTodosProdutosController();
const listarProdutoPeloNome = new ListarProdutoPeloNomeController();

produtoRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_produto"),
  listarTodosProdutos.handle
);
produtoRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_produto"),
  listarProdutoPeloId.handle
);
produtoRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_produto"),
  atualizarProduto.handle
);
produtoRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("deletar_produto"),
  deleteProduto.handle
);
produtoRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_produto"),
  criarProduto.handle
);

export { produtoRouter };
