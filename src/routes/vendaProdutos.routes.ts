import { Router } from "express";
import { CriarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/criarVendaProduto/CriarVendaProdutoController";

const vendaProdutoRouter = Router();

const criarVendaProduto = new CriarVendaProdutoController();

vendaProdutoRouter.post("/", criarVendaProduto.handle);

export { vendaProdutoRouter };
