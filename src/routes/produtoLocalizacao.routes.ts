import { Router } from "express";
import { redisClient } from "../server";
import { CriarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/criarProdutoLocalizacao/CriarProdutoLocalizacaoController";
import { AtualizarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/atualizarProdutoLocalizacao/AtualizarProdutoLocalizacaoController";
import { ListarUmProdutoLocalizacaoPorIdController } from "../model/produtosLocalizacoes/casoDeUso/listarProdutoLocalizacaoPeloId/ListarProdutoLocalizacaoPeloIdController";
import { ListarTodosProdutosLocalizacoesController } from "../model/produtosLocalizacoes/casoDeUso/listarTodosProdutosLocalizacoes/ListarTodosProdutosLocalizacoesController";
import { DeleteProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/deleteProdutoLocalizacao/DeleteProdutoLocalizacaoController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const produtoLocalizacaoRouter = Router();

const criarProdutoLocalizacao = new CriarProdutoLocalizacaoController();
const atualizarProdutoLocalizacao = new AtualizarProdutoLocalizacaoController();
const listarUmProdutoLocalizacaoPorId =
  new ListarUmProdutoLocalizacaoPorIdController();
const listarTodosProdutosLocalizacoes =
  new ListarTodosProdutosLocalizacoesController();
const deleteProdutoLocalizacao = new DeleteProdutoLocalizacaoController();

produtoLocalizacaoRouter.get(
  "/",
  verificarPermissao("listar_produto_localizacao"),
  cacheMiddleware("produtosLocalizacoes"),
  listarTodosProdutosLocalizacoes.handle
);

produtoLocalizacaoRouter.get(
  "/:id",
  verificarPermissao("listar_produto_localizacao"),
  cacheMiddleware("produtosLocalizacoes"),
  listarUmProdutoLocalizacaoPorId.handle
);

produtoLocalizacaoRouter.post(
  "/",
  verificarPermissao("criar_produto_localizacao"),
  async (req, res) => {
    const result = await criarProdutoLocalizacao.handle(req, res);
    await redisClient.del("produtosLocalizacoes:/produtoLocalizacao");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

produtoLocalizacaoRouter.put(
  "/:id",
  verificarPermissao("atualizar_produto_localizacao"),
  async (req, res) => {
    const result = await atualizarProdutoLocalizacao.handle(req, res);
    await Promise.all([
      redisClient.del("produtosLocalizacoes:/produtoLocalizacao"),
      redisClient.del(
        `produtosLocalizacoes:/produtoLocalizacao/${req.params.id}`
      ),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

produtoLocalizacaoRouter.delete(
  "/:id",
  verificarPermissao("deletar_produto_localizacao"),
  async (req, res) => {
    const result = await deleteProdutoLocalizacao.handle(req, res);
    await Promise.all([
      redisClient.del("produtosLocalizacoes:/produtoLocalizacao"),
      redisClient.del(
        `produtosLocalizacoes:/produtoLocalizacao/${req.params.id}`
      ),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { produtoLocalizacaoRouter };
