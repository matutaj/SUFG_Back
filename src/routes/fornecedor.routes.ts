import { Router } from "express";

import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/CriarFornecedorController";

const fornecedorRouter = Router();
const criarFornecedor = new CriarFornecedorController();

fornecedorRouter.post("/", criarFornecedor.handle);

export { fornecedorRouter };
