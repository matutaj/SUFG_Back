import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
const clientesRoutes = Router();

const criarClienteController = new CriarClienteController();

clientesRoutes.post("/", criarClienteController.handle);

export { clientesRoutes };
