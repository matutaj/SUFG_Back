import { Router } from "express";
//import { redisClient } from "../server";
//import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarFornecedorController } from "../model/fornecedores/casoDeUso/criarFornecedor/CriarFornecedorController";
import { ListarTodosFornecedoresController } from "../model/fornecedores/casoDeUso/listarTodosFornecedores/ListarTodosFornecedoresController";
import { ListarFornecedorPeloNomeController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloNome/ListarFornecedorPeloNomeController";
import { AtualizarFornecedorController } from "../model/fornecedores/casoDeUso/atualizarFornecedor/AtualizarFornecedorController";
import { DeleteFornecedorController } from "../model/fornecedores/casoDeUso/deleteFornecedor/DeleteFornecedorController";
import { ListarUmFornecedorPeloIdController } from "../model/fornecedores/casoDeUso/listarFornecedorPeloId/ListarFornecedorPeloIdController";
import { ListarFornecedorNumeroContribuinteController } from "../model/fornecedores/casoDeUso/listarFornecedorNumeroContribuinte/ListarFornecedorNumeroContribuinteController";
import { ListarEmailFornecedorController } from "../model/fornecedores/casoDeUso/listarFornecedorEmail/ListarFornecedorEmailController";
import { ListarTelefoneFornecedorController } from "../model/fornecedores/casoDeUso/listarFornecedorTelefone/ListarFornecedorTelefoneController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const fornecedorRouter = Router();

const criarFornecedor = new CriarFornecedorController();
const listarFornecedorPeloId = new ListarUmFornecedorPeloIdController();
const listarFornecedorNumeroContribuinte =
  new ListarFornecedorNumeroContribuinteController();
const listarEmailFornecedor = new ListarEmailFornecedorController();
const listarTelefoneFornecedor = new ListarTelefoneFornecedorController();
const atualizarFornecedor = new AtualizarFornecedorController();
const deleteFornecedor = new DeleteFornecedorController();
const listarFornecedorPeloNome = new ListarFornecedorPeloNomeController();
const listarTodosFornecedores = new ListarTodosFornecedoresController();

fornecedorRouter.get(
  "/",
  verificarPermissao("listar_fornecedor"),
  //cacheMiddleware("fornecedores"),
  listarTodosFornecedores.handle
);

fornecedorRouter.get(
  "/:id",
  verificarPermissao("listar_fornecedor"),
  // cacheMiddleware("fornecedores"),
  listarFornecedorPeloId.handle
);

fornecedorRouter.get(
  "/:email",
  verificarPermissao("listar_fornecedor"),
  //cacheMiddleware("fornecedores"),
  listarEmailFornecedor.handle
);

fornecedorRouter.get(
  "/:nome",
  verificarPermissao("listar_fornecedor"),
  //cacheMiddleware("fornecedores"),
  listarFornecedorPeloNome.handle
);

fornecedorRouter.get(
  "/:numeroContribuinte",
  verificarPermissao("listar_fornecedor"),
  //cacheMiddleware("fornecedores"),
  listarFornecedorNumeroContribuinte.handle
);

fornecedorRouter.get(
  "/:telefoneFornecedor",
  verificarPermissao("listar_fornecedor"),
  //cacheMiddleware("fornecedores"),
  listarTelefoneFornecedor.handle
);

fornecedorRouter.post(
  "/",
  verificarPermissao("criar_fornecedor"),
  criarFornecedor.handle
  /*   async (req, res) => {
    const result = await criarFornecedor.handle(req, res);
    await redisClient.del("fornecedores:/fornecedor");
    // .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

fornecedorRouter.put(
  "/:id",
  verificarPermissao("atualizar_fornecedor"),
  atualizarFornecedor.handle
  /*   async (req, res) => {
    const result = await atualizarFornecedor.handle(req, res);
    await Promise.all([
      redisClient.del("fornecedores:/fornecedor"),
      redisClient.del(`fornecedores:/fornecedor/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

fornecedorRouter.delete(
  "/:id",
  verificarPermissao("eliminar_fornecedor"),
  deleteFornecedor.handle
  /*   async (req, res) => {
    const result = await deleteFornecedor.handle(req, res);
    await Promise.all([
      redisClient.del("fornecedores:/fornecedor"),
      redisClient.del(`fornecedores:/fornecedor/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { fornecedorRouter };
