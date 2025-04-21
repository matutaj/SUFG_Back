import { Router } from "express";

import { CriarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/criarCategoriaProduto/CriarCategoriaProdutoController";
import { ListarTodasCategoriasProdutosController } from "../model/categoriaProdutos/casoDeUso/listarTodasCategoriasProdutos/ListarTodasCategoriasProdutosController";
import { AtualizarCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/atualizarCategoriaProduto/AtualizarCategoriaProdutoController";
import { DeleteCategoriaProdutoController } from "../model/categoriaProdutos/casoDeUso/deleteCategoriaProduto/DeleteCategoriaProdutoController";
import { ListarUmaCategoriaProdutoPeloIdController } from "../model/categoriaProdutos/casoDeUso/listarCategoriaProdutoPeloId/ListarCategoriaProdutoPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const categoriaProdutoRouter = Router();

const listarTodasCategoriasProdutos =
  new ListarTodasCategoriasProdutosController();
const criarCategoriaProduto = new CriarCategoriaProdutoController();
const listarCategoriaProdutoPeloId =
  new ListarUmaCategoriaProdutoPeloIdController();
const atualizarCategoriaProduto = new AtualizarCategoriaProdutoController();
const deleteCategoriaProduto = new DeleteCategoriaProdutoController();

categoriaProdutoRouter.get(
  "/",
  verificarPermissao("listar_categoria_produto"),
  verificarRoles(["Admin", "Gerente"]),
  listarTodasCategoriasProdutos.handle
);
categoriaProdutoRouter.get(
  "/:id",
  verificarPermissao("listar_categoria_produto"),
  verificarRoles(["Admin", "Gerente"]),
  listarCategoriaProdutoPeloId.handle
);
categoriaProdutoRouter.put(
  "/:id",
  verificarPermissao("atualizar_categoria_produto"),
  verificarRoles(["Admin", "Gerente"]),
  atualizarCategoriaProduto.handle
);
categoriaProdutoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_categoria_produto"),
  verificarRoles(["Admin", "Gerente"]),
  deleteCategoriaProduto.handle
);
categoriaProdutoRouter.post(
  "/",
  verificarPermissao("criar_categoria_produto"),
  verificarRoles(["Admin", "Gerente"]),
  criarCategoriaProduto.handle
);

export { categoriaProdutoRouter };
