import { Router } from "express";
//import { redisClient } from "../server";
//import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
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

clientesRouter.get(
  "/",
  //cacheMiddleware("clientes"),
  listartodosClientes.handle
);

clientesRouter.get(
  "/:id",
  verificarPermissao("listar_clientes"),
  //cacheMiddleware("clientes"),
  listarUmClientePeloIdController.handle
);

clientesRouter.get(
  "/:email",
  verificarPermissao("listar_clientes"),
  // cacheMiddleware("clientes"),
  listarEmailClienteController.handle
);

clientesRouter.get(
  "/telefone/:telefone",
  verificarPermissao("listar_clientes"),
  //cacheMiddleware("clientes"),
  listarTelefoneClienteController.handle
);

clientesRouter.get(
  "/contribuinte/:numeroContribuinte",
  verificarPermissao("listar_clientes"),
  // cacheMiddleware("clientes"),
  listarNumeroContribuinteController.handle
);

clientesRouter.get(
  "/nome/:nome",
  verificarPermissao("listar_clientes"),
  //cacheMiddleware("clientes"),
  listarClientePeloNome.handle
);

clientesRouter.post(
  "/",
  verificarPermissao("criar_cliente")
  /*   async (req, res) => {
    const result = await criarClienteController.handle(req, res);
    await redisClient.del("clientes:/cliente");
    //  .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

clientesRouter.put(
  "/:id",
  verificarPermissao("atualizar_cliente")
  /*   async (req, res) => {
    const result = await atualizarClienteController.handle(req, res);
    await Promise.all([
      redisClient.del("clientes:/cliente"),
      redisClient.del(`clientes:/cliente/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

clientesRouter.delete(
  "/:id",
  verificarPermissao("eliminar_cliente")
  /*   async (req, res) => {
    const result = await deleteClienteController.handle(req, res);
    await Promise.all([
      redisClient.del("clientes:/cliente"),
      redisClient.del(`clientes:/cliente/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { clientesRouter };
