import { Router } from "express";
import { redisClient } from "../server";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/criarFuncaoPermissao/CriarFuncaoPermissaoController";
import { ListarUmaFuncaoPermissaoPeloIdController } from "../model/funcoesPermissoes/casoDeUso/listarUmaFuncaoPermissaoPeloId/ListarUmaFuncaoPermissaoPeloIdController";
import { AtualizarFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/atualizarFuncaoPermissao/AtualizarFuncaoPermissaoController";
import { DeleteFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/eliminarFuncaoPermissao/EliminarFuncaoPermissaoController";
import { ListarTodasFuncoesPermissoesController } from "../model/funcoesPermissoes/casoDeUso/listarTodasFuncoesPermissoes/ListarTodasFuncoesPermissoesController";
import { verificarPermissao } from "../middlewares/permissoes";

const funcaoPermissaoRoutes = Router();

const criarFuncaoPermissao = new CriarFuncaoPermissaoController();
const listarUmaFuncaoPermissaoPeloId =
  new ListarUmaFuncaoPermissaoPeloIdController();
const atualizarFuncaoPermissao = new AtualizarFuncaoPermissaoController();
const deleteFuncaoPermissao = new DeleteFuncaoPermissaoController();
const listarTodasFuncoesPermissoes =
  new ListarTodasFuncoesPermissoesController();

funcaoPermissaoRoutes.get(
  "/",
  verificarPermissao("listar_funcao_permissao"),
  cacheMiddleware("funcoes_permissoes"),
  listarTodasFuncoesPermissoes.handle
);

funcaoPermissaoRoutes.get(
  "/:id",
  verificarPermissao("listar_funcao_permissao"),
  cacheMiddleware("funcoes_permissoes"),
  listarUmaFuncaoPermissaoPeloId.handle
);

funcaoPermissaoRoutes.post(
  "/",
  verificarPermissao("criar_funcao_permissao"),
  async (req, res) => {
    const result = await criarFuncaoPermissao.handle(req, res);
    await redisClient.del("funcoes_permissoes:/funcao_permissao");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcaoPermissaoRoutes.put(
  "/:id",
  verificarPermissao("atualizar_funcao_permissao"),
  async (req, res) => {
    const result = await atualizarFuncaoPermissao.handle(req, res);
    await Promise.all([
      redisClient.del("funcoes_permissoes:/funcao_permissao"),
      redisClient.del(`funcoes_permissoes:/funcao_permissao/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

funcaoPermissaoRoutes.delete(
  "/:id",
  verificarPermissao("eliminar_funcao_permissao"),
  async (req, res) => {
    const result = await deleteFuncaoPermissao.handle(req, res);
    await Promise.all([
      redisClient.del("funcoes_permissoes:/funcao_permissao"),
      redisClient.del(`funcoes_permissoes:/funcao_permissao/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { funcaoPermissaoRoutes };
