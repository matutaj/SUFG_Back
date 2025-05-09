import { Router } from "express";

import { CriarClienteController } from "../model/clientes/casoDeUso/criarCliente/CriarClienteController";
import { ListarClientePeloNomeController } from "../model/clientes/casoDeUso/listarClientePeloNome/ListarClientePeloNomeController";
import { AtualizarClienteController } from "../model/clientes/casoDeUso/atualizarCliente/AtualizarClienteController";
import { DeleteClienteController } from "../model/clientes/casoDeUso/deleteCliente/DeleteClienteController";
import { ListarUmClientePeloIdController } from "../model/clientes/casoDeUso/listarClientePeloId/ListarClientePeloIdController";
import { ListarEmailClienteController } from "../model/clientes/casoDeUso/listarClientePeloEmail/ListarClientePeloEmailController";
import { ListarTelefoneClienteController } from "../model/clientes/casoDeUso/listarClientePeloTelefone/ListarClientePeloTelefoneController";
import { ListarNumeroDeContribuinteController } from "../model/clientes/casoDeUso/listarClientePeloNumeroContribuinte/ListarClientePeloNumeroContribuinteController";
import { ListarTodosClienteController } from "../model/clientes/casoDeUso/listarTodosClientes/ListarTodosClienteController";
import {
  verificarPermissao,
  verificarRole,
  verificarRoles,
} from "../middlewares/permissoes";
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

clientesRouter.post(
  "/",
  verificarPermissao("criar_cliente"),
  criarClienteController.handle
);
clientesRouter.get(
  "/:id",
  verificarPermissao("listar_clientes"),
  listarUmClientePeloIdController.handle
);
clientesRouter.get(
  "/:email",
  verificarPermissao("listar_clientes"),
  listarEmailClienteController.handle
);
clientesRouter.put(
  "/:id",
  verificarPermissao("atualizar_cliente"),
  atualizarClienteController.handle
);
clientesRouter.delete(
  "/:id",
  verificarPermissao("eliminar_cliente"),
  deleteClienteController.handle
);
clientesRouter.get("/", listartodosClientes.handle);
export { clientesRouter };
