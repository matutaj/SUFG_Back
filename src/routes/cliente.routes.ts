import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
import { ListarClientePeloNomeController } from "../model/clientes/casoDeUso/listarClientePeloNome/ListarClientePeloNomeController";
import { AtualizarClienteController } from "../model/clientes/casoDeUso/atualizarCliente/AtualizarClienteController";
import { DeleteClienteController } from "../model/clientes/casoDeUso/deleteCliente/DeleteClienteController";
import { ListarUmClientePeloIdController } from "../model/clientes/casoDeUso/listarClientePeloId/ListarClientePeloIdController";
import { ListarEmailClienteController } from "../model/clientes/casoDeUso/listarClientePeloEmail/ListarClientePeloEmailController";
import { ListarTelefoneClienteController } from "../model/clientes/casoDeUso/listarClientePeloTelefone/ListarClientePeloTelefoneController";
import { ListarNumeroDeContribuinteController } from "../model/clientes/casoDeUso/listarClientePeloNumeroContribuinte/ListarClientePeloNumeroContribuinteController";
import { ListarTodosClienteController } from "../model/clientes/casoDeUso/listarTodosclientes/listarTodosClienteController";
const clientesRouter = Router();

const criarClienteController = new CriarClienteController();
const listarUmClientePeloIdController = new ListarUmClientePeloIdController();
const listarEmailClienteController = new ListarEmailClienteController();
const listarTelefoneClienteController = new ListarTelefoneClienteController();
const listarNumeroContribuinteController =
  new ListarNumeroDeContribuinteController();
const atualizarClienteController = new AtualizarClienteController();
const deleteClienteController = new DeleteClienteController();
const listarClientePeloNome = new ListarClientePeloNomeController();
const listartodosClientes = new ListarTodosClienteController();

clientesRouter.post("/", criarClienteController.handle);
clientesRouter.get("/:id", listarUmClientePeloIdController.handle);
clientesRouter.get("/:email", listarEmailClienteController.handle);
clientesRouter.get("/:telefone", listarTelefoneClienteController.handle);
clientesRouter.get("/:contribuinte", listarNumeroContribuinteController.handle);
clientesRouter.put("/:id", atualizarClienteController.handle);
clientesRouter.delete("/:id", deleteClienteController.handle);
clientesRouter.get("/:nomeCliente", listarClientePeloNome.handle);
clientesRouter.get("/", listartodosClientes.handle);
export { clientesRouter };
