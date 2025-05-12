import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
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
  verificarPermissao("listar_categoria"),
  cacheMiddleware("categorias"),
  listarTodasCategoriasProdutos.handle
);

categoriaProdutoRouter.get(
  "/:id",
  verificarPermissao("listar_categoria"),
  cacheMiddleware("categorias"),
  listarCategoriaProdutoPeloId.handle
);

categoriaProdutoRouter.post(
  "/",
  verificarPermissao("criar_categoria"),
  async (req, res) => {
    const result = await criarCategoriaProduto.handle(req, res);
    await redisClient
      .del("categorias:/categoria")
      .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

categoriaProdutoRouter.put(
  "/:id",
  verificarPermissao("atualizar_categoria"),
  async (req, res) => {
    const result = await atualizarCategoriaProduto.handle(req, res);
    await Promise.all([
      redisClient.del("categorias:/categoria"),
      redisClient.del(`categorias:/categoria/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

categoriaProdutoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_categoria"),
  async (req, res) => {
    const result = await deleteCategoriaProduto.handle(req, res);
    await Promise.all([
      redisClient.del("categorias:/categoria"),
      redisClient.del(`categorias:/categoria/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { categoriaProdutoRouter };
