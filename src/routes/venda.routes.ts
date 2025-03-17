import { Router } from "express";
import { CriarVendaController } from "../model/vendas/casoDeUso/criarVenda/CriarVendaController";

const vendaRouter = Router();

const criarVenda = new CriarVendaController();

vendaRouter.post("/", criarVenda.handle);

export { vendaRouter };