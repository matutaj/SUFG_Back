import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarCaixaController } from "../model/caixas/casoDeUso/criarCaixa/CriarCaixaController";
import { ListarCaixaPeloNomeController } from "../model/caixas/casoDeUso/listarCaixaPeloNome/ListarCaixaPeloNomeController";
import { ListarTodosCaixasController } from "../model/caixas/casoDeUso/listarTodosCaixas/ListarTodosCaixasController";
import { AtualizarCaixaController } from "../model/caixas/casoDeUso/atualizarCaixa/AtualizarCaixaController";
import { DeleteCaixaController } from "../model/caixas/casoDeUso/deleteCaixa/DeleteCaixaController";
import { ListarUmCaixaPeloIdController } from "../model/caixas/casoDeUso/listarCaixaPeloId/ListarCaixaPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const caixaRouter = Router();

const atualizarCaixa = new AtualizarCaixaController();
const deleteCaixa = new DeleteCaixaController();
const criarCaixa = new CriarCaixaController();
const listarCaixaPeloNome = new ListarCaixaPeloNomeController();
const listarTodosCaixas = new ListarTodosCaixasController();
const listarUmCaixaPeloId = new ListarUmCaixaPeloIdController();

caixaRouter.get(
  "/",
  verificarPermissao("listar_caixa"),
  //cacheMiddleware("caixas"),
  listarTodosCaixas.handle
);

caixaRouter.get(
  "/:id",
  verificarPermissao("listar_caixa"),
  //cacheMiddleware("caixas"),
  listarUmCaixaPeloId.handle
);

caixaRouter.get(
  "/nome/:nomeCaixa",
  verificarPermissao("listar_caixa"),
  //cacheMiddleware("caixas"),
  listarCaixaPeloNome.handle
);

caixaRouter.post(
  "/",
  verificarPermissao("criar_caixa"),
  criarCaixa.handle
  /* async (req, res) => {
  const result = await criarCaixa.handle(req, res);
  await redisClient.del("caixas:/caixa");
  //.catch((err) => console.error("Erro ao invalidar cache:", err));
  return result;
} */
);

caixaRouter.put(
  "/:id",
  atualizarCaixa.handle
  // verificarPermissao("atualizar_caixa"),
  /*  async (req, res) => {
    const result = await atualizarCaixa.handle(req, res);
    await Promise.all([
      redisClient.del("caixas:/caixa"),
      redisClient.del(`caixas:/caixa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

caixaRouter.delete(
  "/:id",
  deleteCaixa.handle
  //verificarPermissao("eliminar_caixa"),
  /*  async (req, res) => {
    const result = await deleteCaixa.handle(req, res);
    await Promise.all([
      redisClient.del("caixas:/caixa"),
      redisClient.del(`caixas:/caixa/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { caixaRouter };
