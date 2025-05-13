import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/criarFuncionarioCaixa/CriarFuncionarioCaixaController";
import { DeleteFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/deleteFuncionarioCaixa/DeleteFuncionarioCaixaController";
import { ListarUmFuncionarioCaixaPelaAberturaController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPelaAbertura/ListarUmFuncionarioCaixaPelaAberturaController";
import { ListarEstadoCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarEstadoCaixa/ListarEstadoCaixaController";
import { ListarUmFuncionarioCaixaPeloIdController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPeloID/ListarUmFuncionarioCaixaPeloIDController";
import { AtualizarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/atualizarFuncionarioCaixa/AtualizarFuncionarioCaixaController";
import { ListarTodosFuncionariosCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarTodosFuncionariosCaixa/ListarTodosFuncionariosCaixaController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const funcionarioCaixaRouter = Router();

const criarFuncionarioCaixa = new CriarFuncionarioCaixaController();
const deleteFuncionarioCaixa = new DeleteFuncionarioCaixaController();
const listarTodosFuncionariosCaixa =
  new ListarTodosFuncionariosCaixaController();
const atualizarFuncionarioCaixa = new AtualizarFuncionarioCaixaController();
const listarUmFuncionarioCaixaPeloId =
  new ListarUmFuncionarioCaixaPeloIdController();
const listarEstadoCaixa = new ListarEstadoCaixaController();
const listarUmFuncionarioCaixaPelaAbertura =
  new ListarUmFuncionarioCaixaPelaAberturaController();

funcionarioCaixaRouter.get(
  "/",
  verificarPermissao("listar_funcionario_caixa"),
  cacheMiddleware("funcionarios_caixa"),
  listarTodosFuncionariosCaixa.handle
);

funcionarioCaixaRouter.get(
  "/:id",
  verificarPermissao("listar_funcionario_caixa"),
  cacheMiddleware("funcionarios_caixa"),
  listarUmFuncionarioCaixaPeloId.handle
);

funcionarioCaixaRouter.get(
  "/abertura/:abertura",
  verificarPermissao("listar_funcionario_caixa"),
  cacheMiddleware("funcionarios_caixa"),
  listarUmFuncionarioCaixaPelaAbertura.handle
);

funcionarioCaixaRouter.get(
  "/estado/:estado",
  verificarPermissao("listar_funcionario_caixa"),
  cacheMiddleware("funcionarios_caixa"),
  listarEstadoCaixa.handle
);

funcionarioCaixaRouter.post(
  "/",
  verificarPermissao("criar_funcionario_caixa"),
  async (req, res) => {
    const result = await criarFuncionarioCaixa.handle(req, res);
    await redisClient.del("funcionarios_caixa:/funcionario_caixa");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcionarioCaixaRouter.put(
  "/:id",
  verificarPermissao("atualizar_funcionario_caixa"),
  async (req, res) => {
    const result = await atualizarFuncionarioCaixa.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios_caixa:/funcionario_caixa"),
      redisClient.del(`funcionarios_caixa:/funcionario_caixa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcionarioCaixaRouter.delete(
  "/:id",
  verificarPermissao("eliminar_funcionario_caixa"),
  async (req, res) => {
    const result = await deleteFuncionarioCaixa.handle(req, res);
    await Promise.all([
      redisClient.del("funcionarios_caixa:/funcionario_caixa"),
      redisClient.del(`funcionarios_caixa:/funcionario_caixa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { funcionarioCaixaRouter };
