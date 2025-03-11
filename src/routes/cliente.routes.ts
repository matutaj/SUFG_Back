import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
import { ListarClientePeloNomeController } from "../model/clientes/casoDeUso/listarClientePeloNome/ListarClientePeloNomeController";
import { ListarTodosClienteController } from "../model/clientes/casoDeUso/listarTodosClientes/ListarTodosClientesController";
const clientesRoutes = Router();

const criarClienteController = new CriarClienteController();
const listarClientePeloNome = new ListarClientePeloNomeController();
const listartodosClientes = new ListarTodosClienteController();

clientesRoutes.post("/", criarClienteController.handle);
clientesRoutes.get("/:nomeCliente", listarClientePeloNome.handle);
clientesRoutes.get("/", listartodosClientes.handle)
export { clientesRoutes };
