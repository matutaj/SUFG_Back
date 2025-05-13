import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { criarFuncionarioController } from "../model/funcionarios/casoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/casoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";
import { AtualizarFuncionarioController } from "../model/funcionarios/casoDeUso/atualizarFuncionario/AtualizarFuncionarioController";
import { DeleteFuncionarioController } from "../model/funcionarios/casoDeUso/deleteFuncionario/DeleteFuncionarioController";
import { ListarUmFuncionarioPeloIdController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloId/ListarFuncionarioPeloIdController";
import { ListarEmailFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioEmail/ListarFuncionarioEmailController";
import { ListarTelefoneFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioTelefone/ListarFuncionarioTelefoneController";
import { ListarNumeroContribuinteFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioNumeroContribuinte/ListarFuncionarioNumeroContribuinteController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const funcionarioRouter = Router();

const criarFuncionario = new criarFuncionarioController();
const listarFuncionarioPeloId = new ListarUmFuncionarioPeloIdController();
const listarFuncionarioEmail = new ListarEmailFuncionarioController();
const listarFuncionarioTelefone = new ListarTelefoneFuncionarioController();
const listarFuncionarioNumeroContribuinte =
  new ListarNumeroContribuinteFuncionarioController();
const atualizarFuncionario = new AtualizarFuncionarioController();
const deleteFuncionario = new DeleteFuncionarioController();
const listarFuncionarioPeloNome = new ListarFuncionarioPeloNomeController();
const listarTodosFuncionarios = new ListarTodosFuncionariosController();

funcionarioRouter.get(
  "/",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarTodosFuncionarios.handle
);

funcionarioRouter.get(
  "/:id",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarFuncionarioPeloId.handle
);

funcionarioRouter.get(
  "/email/:email",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarFuncionarioEmail.handle
);

funcionarioRouter.get(
  "/nome/:nome",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarFuncionarioPeloNome.handle
);

funcionarioRouter.get(
  "/contribuinte/:numeroContribuinte",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarFuncionarioNumeroContribuinte.handle
);

funcionarioRouter.get(
  "/telefone/:telefone",
  verificarPermissao("listar_funcionario"),
  cacheMiddleware("funcionarios"),
  listarFuncionarioTelefone.handle
);

funcionarioRouter.post(
  "/",
  verificarPermissao("criar_funcionario"),
  async (req, res) => {
    const result = await criarFuncionario.handle(req, res);
    await redisClient.del("funcionarios:/funcionario");
    // .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcionarioRouter.put(
  "/:id",
  verificarPermissao("atualizar_funcionario"),
  async (req, res) => {
    const result = await atualizarFuncionario.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios:/funcionario"),
      redisClient.del(`funcionarios:/funcionario/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcionarioRouter.delete(
  "/:id",
  verificarPermissao("eliminar_funcionario"),
  async (req, res) => {
    const result = await deleteFuncionario.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios:/funcionario"),
      redisClient.del(`funcionarios:/funcionario/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { funcionarioRouter };
