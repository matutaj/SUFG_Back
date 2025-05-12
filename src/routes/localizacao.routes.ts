import { Router } from "express";
import { redisClient } from "../server";
import { CriarLocalizacaoController } from "../model/localizacoes/casoDeUso/criarLocalizacao/CriarLocalizacaoController";
import { AtualizarLocalizacaoController } from "../model/localizacoes/casoDeUso/atualizarLocalizacao/AtualizarLocalizacaoController";
import { DeleteLocalizacaoController } from "../model/localizacoes/casoDeUso/deleteLocalizacao/DeleteLocalizacaoController";
import { ListarUmLocalizacaoPeloIdController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloId/ListarLocalizacaoPeloIdController";
import { ListarUmLocalizacaoPeloNomeController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloNome/ListarLocalizacaoPeloNomeController";
import { ListarTodosLocalizacoesController } from "../model/localizacoes/casoDeUso/listarTodasLocalizacoes/ListarTodasLocalizacoesController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const localizacaoRouter = Router();

const criarLocalizacao = new CriarLocalizacaoController();
const listarTodasLocalizacoes = new ListarTodosLocalizacoesController();
const listarUmLocalizacaoPeloId = new ListarUmLocalizacaoPeloIdController();
const listarUmLocalizacaoPeloNome = new ListarUmLocalizacaoPeloNomeController();
const atualizarLocalizacao = new AtualizarLocalizacaoController();
const deleteLocalizacao = new DeleteLocalizacaoController();

localizacaoRouter.get(
  "/",
  verificarPermissao("listar_localizacao"),
  cacheMiddleware("localizacoes"),
  listarTodasLocalizacoes.handle
);

localizacaoRouter.get(
  "/:id",
  verificarPermissao("listar_localizacao"),
  cacheMiddleware("localizacoes"),
  listarUmLocalizacaoPeloId.handle
);

localizacaoRouter.post(
  "/",
  verificarPermissao("criar_localizacao"),
  async (req, res) => {
    const result = await criarLocalizacao.handle(req, res);
    await redisClient
      .del("localizacoes:/localizacao")
      .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

localizacaoRouter.put(
  "/:id",
  verificarPermissao("atualizar_localizacao"),
  async (req, res) => {
    const result = await atualizarLocalizacao.handle(req, res);
    await Promise.all([
      redisClient.del("localizacoes:/localizacao"),
      redisClient.del(`localizacoes:/localizacao/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

localizacaoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_localizacao"),
  async (req, res) => {
    const result = await deleteLocalizacao.handle(req, res);
    await Promise.all([
      redisClient.del("localizacoes:/localizacao"),
      redisClient.del(`localizacoes:/localizacao/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { localizacaoRouter };
