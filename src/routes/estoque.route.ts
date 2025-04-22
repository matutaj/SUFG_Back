import { Router } from "express";
import { ListarTodosEstoquesController } from "../model/estoques/casoDeUso/listarTodosEstoques/ListarTodosEstoquesController";
import { ListarUmEstoquePeloIdController } from "../model/estoques/casoDeUso/listarUmEstoquePeloId/ListarUmEstoquePeloIdController";
import { ListarUmEstoquePeloLoteController } from "../model/estoques/casoDeUso/listarUmEstoquePeloProduto/ListarUmEstoquePeloLoteController";
import { CriarEstoqueController } from "../model/estoques/casoDeUso/criarEstoque/CriarEstoqueController";
import { AtualizarEstoqueController } from "../model/estoques/casoDeUso/atualizarEstoque/AtualizarEstoqueController";
import { DeleteEstoqueController } from "../model/estoques/casoDeUso/deleteEstoque/DeleteEstoqueController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
const estoqueRouter = Router();

const listarTodosEstoquesController = new ListarTodosEstoquesController();
const listarUmEstoquePeloIdController = new ListarUmEstoquePeloIdController();
const listarUmEstoquePeloLoteController =
  new ListarUmEstoquePeloLoteController();
const criarEstoqueController = new CriarEstoqueController();
const atualizarEstoqueController = new AtualizarEstoqueController();
const deleteEstoqueController = new DeleteEstoqueController();

estoqueRouter.get(
  "/",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_estoque"), */
  listarTodosEstoquesController.handle
);
estoqueRouter.get(
  "/:id",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_estoque"), */
  listarUmEstoquePeloIdController.handle
);
estoqueRouter.get(
  "/produto/:id_produto",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_estoque"), */
  listarUmEstoquePeloLoteController.handle
);
estoqueRouter.post(
  "/",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_estoque"), */
  criarEstoqueController.handle
);
estoqueRouter.put(
  "/:id",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_estoque"), */
  atualizarEstoqueController.handle
);
estoqueRouter.delete(
  "/:id",/* 
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_estoque"), */
  deleteEstoqueController.handle
);

export { estoqueRouter };
