import { Router } from "express";
import { redisClient } from "../server";
import { CriarSeccaoController } from "../model/seccoes/casoDeUso/criarSeccao/CriarSeccaoController";
import { ListarSeccaoPeloNomeController } from "../model/seccoes/casoDeUso/listarSeccaoPeloNome/ListarSeccaoPeloNomeController";
import { ListarTodasSeccoesController } from "../model/seccoes/casoDeUso/listarTodasSeccoes/ListarTodasSeccoesController";
import { AtualizarSeccaoController } from "../model/seccoes/casoDeUso/atualizarSeccao/AtualizarSeccaoController";
import { DeleteSeccaoController } from "../model/seccoes/casoDeUso/deleteSeccao/DeleteSeccaoController";
import { ListarUmaSeccaoPeloIdController } from "../model/seccoes/casoDeUso/listarSeccaoPeloId/ListarSeccaoPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const seccaoRouter = Router();

const criarSeccao = new CriarSeccaoController();
const atualizarSeccao = new AtualizarSeccaoController();
const deleteSeccao = new DeleteSeccaoController();
const listarSeccaoPeloId = new ListarUmaSeccaoPeloIdController();
const listarTodasSeccoes = new ListarTodasSeccoesController();
const listarSeccaoPeloNome = new ListarSeccaoPeloNomeController();

seccaoRouter.get(
  "/",
  verificarPermissao("listar_seccao"),
  cacheMiddleware("seccoes"),
  listarTodasSeccoes.handle
);

seccaoRouter.get(
  "/:id",
  verificarPermissao("listar_seccao"),
  cacheMiddleware("seccoes"),
  listarSeccaoPeloId.handle
);

seccaoRouter.post("/", verificarPermissao("criar_seccao"), async (req, res) => {
  const result = await criarSeccao.handle(req, res);
  await redisClient
    .del("seccoes:/seccao")
    .catch((err) => console.error("Erro ao invalidar cache:", err));
  return result;
});

seccaoRouter.put(
  "/:id",
  verificarPermissao("atualizar_seccao"),
  async (req, res) => {
    const result = await atualizarSeccao.handle(req, res);
    await Promise.all([
      redisClient.del("seccoes:/seccao"),
      redisClient.del(`seccoes:/seccao/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

seccaoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_seccao"),
  async (req, res) => {
    const result = await deleteSeccao.handle(req, res);
    await Promise.all([
      redisClient.del("seccoes:/seccao"),
      redisClient.del(`seccoes:/seccao/${req.params.id}`),
    ]).catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { seccaoRouter };
