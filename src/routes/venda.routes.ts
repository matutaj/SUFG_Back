import { Router } from "express";
import { CriarVendaController } from "../model/vendas/casoDeUso/criarVenda/CriarVendaController";
import { ListarTodasVendasController } from "../model/vendas/casoDeUso/listarTodasVendas/ListarTodasVendasController";


const vendaRouter = Router();

const criarVenda = new CriarVendaController();
const listarTodasVendas = new ListarTodasVendasController();

vendaRouter.get("/", listarTodasVendas.handle);
vendaRouter.post("/", criarVenda.handle);

export { vendaRouter };