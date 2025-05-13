import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
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

entradaEstoqueRoutes.get(
  "/",
  verificarPermissao("listar_entrada_estoque"),
  cacheMiddleware("entradas_estoque"),
  listarTodasEntradasEstoque.handle
);

entradaEstoqueRoutes.post(
  "/",
  verificarPermissao("criar_entrada_estoque"),
  async (req, res) => {
    const result = await criarEntradaEstoque.handle(req, res);
    await redisClient.del("entradas_estoque:/entrada_estoque");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

entradaEstoqueRoutes.put(
  "/:id",
  verificarPermissao("atualizar_entrada_estoque"),
  async (req, res) => {
    const result = await atualizarEntradaEstoque.handle(req, res);
    await redisClient.del("entradas_estoque:/entrada_estoque");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

entradaEstoqueRoutes.delete(
  "/:id",
  verificarPermissao("eliminar_entrada_estoque"),
  async (req, res) => {
    const result = await deleteEntradaEstoque.handle(req, res);
    await redisClient.del("entradas_estoque:/entrada_estoque");
    // .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { entradaEstoqueRoutes };
