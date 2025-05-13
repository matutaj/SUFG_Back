import { Router } from "express";
//import { redisClient } from "../server";
//import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
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
  "/",
  verificarPermissao("listar_estoque"),
//  cacheMiddleware("estoques"),
  listarTodosEstoquesController.handle
);

estoqueRouter.get(
  "/:id",
  verificarPermissao("listar_estoque"),
 // cacheMiddleware("estoques"),
  listarUmEstoquePeloIdController.handle
);

estoqueRouter.get(
  "/produto/:id_produto",
  verificarPermissao("listar_estoque"),
 // cacheMiddleware("estoques"),
  listarUmEstoquePeloLoteController.handle
);

estoqueRouter.post(
  "/",
  verificarPermissao("criar_estoque")
  /*   async (req, res) => {
    const result = await criarEstoqueController.handle(req, res);
    await redisClient.del("estoques:/estoque");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

estoqueRouter.put(
  "/:id",
  verificarPermissao("atualizar_estoque")
  /*   async (req, res) => {
    const result = await atualizarEstoqueController.handle(req, res);
    await Promise.all([
      redisClient.del("estoques:/estoque"),
      redisClient.del(`estoques:/estoque/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

estoqueRouter.delete(
  "/:id",
  verificarPermissao("eliminar_estoque")
  /*   async (req, res) => {
    const result = await deleteEstoqueController.handle(req, res);
    await Promise.all([
      redisClient.del("estoques:/estoque"),
      redisClient.del(`estoques:/estoque/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { estoqueRouter };
