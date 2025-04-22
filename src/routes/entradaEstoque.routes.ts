import { Router } from "express";

import { CriarEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/criarEntradaEstoque/criarEntradaEstoqueController";
import { DeleteEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/deleteEntradaEstoque/DeleteEntradaEstoqueController";
import { AtualizarEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/atualizarEntradaEstoque/AtualizarEntradaEstoqueController";
import { ListarTodasEntradasEstoqueController } from "../model/entradasEstoque/casoDeUso/listarTodasEntradasEstoque/ListarTodasEntradasEstoqueController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const entradaEstoqueRoutes = Router();

const criarEntradaEstoque = new CriarEntradaEstoqueController();
const listarTodasEntradasEstoque = new ListarTodasEntradasEstoqueController();
const atualizarEntradaEstoque = new AtualizarEntradaEstoqueController();
const deleteEntradaEstoque = new DeleteEntradaEstoqueController();

entradaEstoqueRoutes.post(
  "/" /* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_entrada_estoque"), */,
  criarEntradaEstoque.handle
);
entradaEstoqueRoutes.get(
  "/" /* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_entrada_estoque"), */,
  listarTodasEntradasEstoque.handle
);
entradaEstoqueRoutes.put(
  "/:id" /* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_entrada_estoque"), */,
  atualizarEntradaEstoque.handle
);
entradaEstoqueRoutes.delete(
  "/:id" /* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_entrada_estoque"), */,
  deleteEntradaEstoque.handle
);

export { entradaEstoqueRoutes };
