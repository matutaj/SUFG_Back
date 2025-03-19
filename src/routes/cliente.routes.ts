import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
import { ListarClientePeloNomeController } from "../model/clientes/casoDeUso/listarClientePeloNome/ListarClientePeloNomeController";
import { ListarTodosClienteController } from "../model/clientes/casoDeUso/listarTodosClientes/ListarTodosClienteController";
const clientesRouter = Router();

const criarClienteController = new CriarClienteController();
const listarClientePeloNome = new ListarClientePeloNomeController();
const listartodosClientes = new ListarTodosClienteController();

clientesRouter.post("/", criarClienteController.handle);
clientesRouter.get("/:nomeCliente", listarClientePeloNome.handle);
clientesRouter.get("/", listartodosClientes.handle);
export { clientesRouter };
