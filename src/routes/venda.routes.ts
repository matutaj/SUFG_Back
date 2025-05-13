import { Router } from "express";
import { redisClient } from "../server";
import { CriarVendaController } from "../model/vendas/casoDeUso/criarVenda/CriarVendaController";
import { ListarTodasVendasController } from "../model/vendas/casoDeUso/listarTodasVendas/ListarTodasVendasController";
import { ListarVendaPorIdController } from "../model/vendas/casoDeUso/listarVendaPeloId/ListarVendaPeloIdController";
import { AtualizarVendaController } from "../model/vendas/casoDeUso/atualizarVenda/AtualizarVendaController";
import { DeleteVendaController } from "../model/vendas/casoDeUso/eliminarVenda/EliminarVendaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const vendaRouter = Router();

const criarVenda = new CriarVendaController();
const atualizarVenda = new AtualizarVendaController();
const eliminarVenda = new DeleteVendaController();
const listarVendaPeloId = new ListarVendaPorIdController();
const listarTodasVendas = new ListarTodasVendasController();

vendaRouter.get(
  "/",
  verificarPermissao("listar_venda"),
  cacheMiddleware("vendas"),
  listarTodasVendas.handle
);

vendaRouter.get(
  "/:id",
  verificarPermissao("listar_venda"),
  cacheMiddleware("vendas"),
  listarVendaPeloId.handle
);

vendaRouter.post("/", verificarPermissao("criar_venda"), async (req, res) => {
  const result = await criarVenda.handle(req, res);
  await redisClient
    .del("vendas:/venda")
    .catch((err) => console.error("Erro ao invalidar cache:", err));
  return result;
});

vendaRouter.put(
  "/:id",
  verificarPermissao("atualizar_venda"),
  async (req, res) => {
    const result = await atualizarVenda.handle(req, res);
    await Promise.all([
      redisClient.del("vendas:/venda"),
      redisClient.del(`vendas:/venda/${req.params.id}`),
    ])
    .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

vendaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_venda"),
  async (req, res) => {
    const result = await eliminarVenda.handle(req, res);
    await Promise.all([
      redisClient.del("vendas:/venda"),
      redisClient.del(`vendas:/venda/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { vendaRouter };
