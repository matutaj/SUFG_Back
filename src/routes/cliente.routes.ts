import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
import { ListarClientePeloNomeController } from "../model/clientes/casoDeUso/listarClientePeloNome/ListarClientePeloNomeController";
import { ListarTodosClienteController } from "../model/clientes/casoDeUso/listarTodosClientes/ListarTodosClienteController";
import { AtualizarClienteController } from "../model/clientes/casoDeUso/atualizarCliente/AtualizarClienteController";
import { DeleteClienteController } from "../model/clientes/casoDeUso/deleteCliente/DeleteClienteController";

const clientesRouter = Router();

const criarClienteController = new CriarClienteController();
const atualizarClienteController = new AtualizarClienteController();
const deleteClienteController = new DeleteClienteController();
const listarClientePeloNome = new ListarClientePeloNomeController();
const listartodosClientes = new ListarTodosClienteController();

clientesRouter.post("/", criarClienteController.handle);
clientesRouter.put("/", atualizarClienteController.handle);
clientesRouter.delete("/", deleteClienteController.handle);
clientesRouter.get("/:nomeCliente", listarClientePeloNome.handle);
clientesRouter.get("/", listartodosClientes.handle);
export { clientesRouter };
