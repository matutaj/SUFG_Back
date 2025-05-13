import { Router } from "express";
import { redisClient } from "../server";
import { CriarProdutoController } from "../model/produtos/casoDeUso/criarProduto/CriarProdutoController";
import { ListarTodosProdutosController } from "../model/produtos/casoDeUso/listarTodosProdutos/ListarTodosProdutosController";
import { ListarProdutoPeloNomeController } from "../model/produtos/casoDeUso/listarProdutoPeloNome/ListarProdutoPeloNomeController";
import { AtualizarProdutoController } from "../model/produtos/casoDeUso/atualizarProduto/AtualizarProdutoController";
import { DeleteProdutoController } from "../model/produtos/casoDeUso/deleteProduto/DeleteProdutoController";
import { ListarUmProdutoPorIdController } from "../model/produtos/casoDeUso/listarProdutoPeloId/ListarProdutoPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const produtoRouter = Router();

const criarProduto = new CriarProdutoController();
const listarProdutoPeloId = new ListarUmProdutoPorIdController();
const atualizarProduto = new AtualizarProdutoController();
const deleteProduto = new DeleteProdutoController();
const listarTodosProdutos = new ListarTodosProdutosController();
const listarProdutoPeloNome = new ListarProdutoPeloNomeController();

produtoRouter.get(
  "/",
  verificarPermissao("listar_produto"),
  cacheMiddleware("produtos"),
  listarTodosProdutos.handle
);

produtoRouter.get(
  "/:id",
  verificarPermissao("listar_produto"),
  cacheMiddleware("produtos"),
  listarProdutoPeloId.handle
);

produtoRouter.post(
  "/",
  verificarPermissao("criar_produto"),
  async (req, res) => {
    const result = await criarProduto.handle(req, res);
    await redisClient.del("produtos:/produto");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

produtoRouter.put(
  "/:id",
  verificarPermissao("atualizar_produto"),
  async (req, res) => {
    const result = await atualizarProduto.handle(req, res);
    await Promise.all([
      redisClient.del("produtos:/produto"),
      redisClient.del(`produtos:/produto/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

produtoRouter.delete(
  "/:id",
  verificarPermissao("deletar_produto"),
  async (req, res) => {
    const result = await deleteProduto.handle(req, res);
    await Promise.all([
      redisClient.del("produtos:/produto"),
      redisClient.del(`produtos:/produto/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { produtoRouter };
