import { Router } from "express";
//import { redisClient } from "../server";
//import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarFuncaoController } from "../model/funcoes/casoDeUso/criarFuncao/CriarFuncaoController";
import { ListarTodasFuncoesController } from "../model/funcoes/casoDeUso/listarTodasFuncoes/ListarTodasFuncoesController";
import { ListarFuncaoPeloNomeController } from "../model/funcoes/casoDeUso/listarFuncaoPeloNome/ListarFuncaoPeloNomeController";
import { AtualizarFuncaoController } from "../model/funcoes/casoDeUso/atualizarFuncao/AtualizarFuncaoController";
import { DeleteFuncaoController } from "../model/funcoes/casoDeUso/deleteFuncao/DeleteFuncaoController";
import { ListarFuncaoPeloIdController } from "../model/funcoes/casoDeUso/listarFuncaoPeloId/ListarFuncaoPeloIdController";
import { verificarPermissao } from "../middlewares/permissoes";

const funcaoRouter = Router();

const criarFuncao = new CriarFuncaoController();
const listarFuncaoPeloId = new ListarFuncaoPeloIdController();
const atualizarFuncao = new AtualizarFuncaoController();
const deleteFuncao = new DeleteFuncaoController();
const listarFuncaoPeloNome = new ListarFuncaoPeloNomeController();
const listarTodasFuncoes = new ListarTodasFuncoesController();

funcaoRouter.get(
  "/",
  // verificarPermissao("listar_funcao"),
  //cacheMiddleware("funcoes"),
  listarTodasFuncoes.handle
);

funcaoRouter.get(
  "/:id",
  // verificarPermissao("listar_funcao"),
  //cacheMiddleware("funcoes"),
  listarFuncaoPeloId.handle
);

funcaoRouter.get(
  "/nome/:nomeFuncao",
  // verificarPermissao("listar_funcao"),
  //cacheMiddleware("funcoes"),
  listarFuncaoPeloNome.handle
);

funcaoRouter.post(
  "/"
  //  verificarPermissao("criar_funcao"),
  /*  async (req, res) => {
    const result = await criarFuncao.handle(req, res);
    await redisClient.del("funcoes:/funcao");
    // .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

funcaoRouter.put(
  "/:id"
  // verificarPermissao("atualizar_funcao"),
  /*   async (req, res) => {
    const result = await atualizarFuncao.handle(req, res);
    await Promise.all([
      redisClient.del("funcoes:/funcao"),
      redisClient.del(`funcoes:/funcao/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

funcaoRouter.delete(
  "/:id"
  // verificarPermissao("eliminar_funcao"),
  /*   async (req, res) => {
    const result = await deleteFuncao.handle(req, res);
    await Promise.all([
      redisClient.del("funcoes:/funcao"),
      redisClient.del(`funcoes:/funcao/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { funcaoRouter };
