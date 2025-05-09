import { Router } from "express";
import { CriarVendaController } from "../model/vendas/casoDeUso/criarVenda/CriarVendaController";
import { ListarTodasVendasController } from "../model/vendas/casoDeUso/listarTodasVendas/ListarTodasVendasController";
import { ListarVendaPorIdController } from "../model/vendas/casoDeUso/listarVendaPeloId/ListarVendaPeloIdController";
import { AtualizarVendaController } from "../model/vendas/casoDeUso/atualizarVenda/AtualizarVendaController";
import { DeleteVendaController } from "../model/vendas/casoDeUso/eliminarVenda/EliminarVendaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const vendaRouter = Router();

const criarVenda = new CriarVendaController();
const atualizarVenda = new AtualizarVendaController();
const eliminarVenda = new DeleteVendaController();
const listarVendaPeloId = new ListarVendaPorIdController();
const listarTodasVendas = new ListarTodasVendasController();

vendaRouter.get(
  "/",
  verificarPermissao("listar_venda"),
  listarTodasVendas.handle
);
vendaRouter.get(
  "/:id",
  verificarPermissao("listar_venda"),
  listarVendaPeloId.handle
);
vendaRouter.put(
  "/:id",
  verificarPermissao("atualizar_venda"),
  atualizarVenda.handle
);
vendaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_venda"),
  eliminarVenda.handle
);
vendaRouter.post("/", verificarPermissao("criar_venda"), criarVenda.handle);

export { vendaRouter };
