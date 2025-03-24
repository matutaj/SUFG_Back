import { Router } from "express";
import { CriarVendaController } from "../model/vendas/casoDeUso/criarVenda/CriarVendaController";
import { ListarTodasVendasController } from "../model/vendas/casoDeUso/listarTodasVendas/ListarTodasVendasController";
import { ListarVendaPorIdController } from "../model/vendas/casoDeUso/listarVendaPeloId/ListarVendaPeloIdController";
import { AtualizarVendaController } from "../model/vendas/casoDeUso/atualizarVenda/AtualizarVendaController";
import { DeleteVendaController } from "../model/vendas/casoDeUso/eliminarVenda/EliminarVendaController";

const vendaRouter = Router();

const criarVenda = new CriarVendaController();
const atualizarVenda = new AtualizarVendaController();
const eliminarVenda = new DeleteVendaController();
const listarVendaPeloId = new ListarVendaPorIdController();
const listarTodasVendas = new ListarTodasVendasController();

vendaRouter.get("/", listarTodasVendas.handle);
vendaRouter.get("/:id", listarVendaPeloId.handle);
vendaRouter.put("/:id", atualizarVenda.handle);
vendaRouter.delete("/:id", eliminarVenda.handle);
vendaRouter.post("/", criarVenda.handle);

export { vendaRouter };