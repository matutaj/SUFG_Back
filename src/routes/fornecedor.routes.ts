import { Router } from "express";

import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/CriarFornecedorController";

const fornecedorRoute = Router();
const criarFornecedor = new CriarFornecedorController();

fornecedorRoute.post("/", criarFornecedor.handle);

export { fornecedorRoute };
