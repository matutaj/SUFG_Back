import { Router } from "express";
//import { redisClient } from "../server";
import { CriarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/criarVendaProduto/CriarVendaProdutoController";
import { listarTodasVendasProdutosController } from "../model/vendasProdutos/casoDeUso/listarTodasVendasProdutos/ListarTodasVendasProdutosController";
import { ListarVendaProdutoPorIdController } from "../model/vendasProdutos/casoDeUso/listarVendaProdutoPeloId/ListarVendaProdutoPeloIdController";
import { AtualizarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/atualizarVendaProduto/AtualizarVendaProdutoController";
import { DeleteVendaProdutoController } from "../model/vendasProdutos/casoDeUso/eliminarVendaProduto/EliminarVendaProdutoController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
//
const vendaProdutoRouter = Router();

const criarVendaProduto = new CriarVendaProdutoController();
const atualizarVendaProduto = new AtualizarVendaProdutoController();
const listarTodasVendasProdutos = new listarTodasVendasProdutosController();
const listarVendaProdutoPorId = new ListarVendaProdutoPorIdController();
const eliminarVendaProduto = new DeleteVendaProdutoController();

vendaProdutoRouter.get(
  "/",
  verificarPermissao("listar_venda_produto"),
  //cacheMiddleware("vendasProdutos"),
  listarTodasVendasProdutos.handle
);

vendaProdutoRouter.get(
  "/:id",
  verificarPermissao("listar_venda_produto"),
  // cacheMiddleware("vendasProdutos"),
  listarVendaProdutoPorId.handle
);

vendaProdutoRouter.post(
  "/",
  verificarPermissao("criar_venda_produto")
  /*  async (req, res) => {
    const result = await criarVendaProduto.handle(req, res);
    await redisClient.del("vendasProdutos:/vendaProduto");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

vendaProdutoRouter.put(
  "/:id",
  verificarPermissao("atualizar_venda_produto")
  /* async (req, res) => {
    const result = await atualizarVendaProduto.handle(req, res);
    await Promise.all([
      redisClient.del("vendasProdutos:/vendaProduto"),
      redisClient.del(`vendasProdutos:/vendaProduto/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

vendaProdutoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_venda_produto")
  /*  async (req, res) => {
    const result = await eliminarVendaProduto.handle(req, res);
    await Promise.all([
      redisClient.del("vendasProdutos:/vendaProduto"),
      redisClient.del(`vendasProdutos:/vendaProduto/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { vendaProdutoRouter };
