import { Router } from "express";
import { redisClient } from "../server";
import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
import { ListarTodasPrateleirasController } from "../model/prateleiras/casoDeUso/listarTodasPrateleiras/ListarTodasPrateleirasController";
import { AtualizarPrateleiraController } from "../model/prateleiras/casoDeUso/atualizarPrateleira/AtualizarPrateleiraController";
import { DeletePrateleiraController } from "../model/prateleiras/casoDeUso/deletePrateleira/DeletePrateleiraController";
import { ListarUmaPrateleiraPeloIdController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloId/ListarPrateleiraPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";
import { cacheMiddleware } from "../middlewares/cacheMiddlewares";

const prateleiraRouter = Router();

const listarPrateleiraPeloId = new ListarUmaPrateleiraPeloIdController();
const criarPrateleira = new CriarPrateleiraController();
const atualizarPrateleira = new AtualizarPrateleiraController();
const deletePrateleira = new DeletePrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();
const listarTodasPrateleiras = new ListarTodasPrateleirasController();

prateleiraRouter.get(
  "/",
  verificarPermissao("listar_prateleira"),
  cacheMiddleware("prateleiras"),
  listarTodasPrateleiras.handle
);

prateleiraRouter.get(
  "/:id",
  verificarPermissao("listar_prateleira"),
  cacheMiddleware("prateleiras"),
  listarPrateleiraPeloId.handle
);

prateleiraRouter.post(
  "/",
  verificarPermissao("criar_prateleira"),
  async (req, res) => {
    const result = await criarPrateleira.handle(req, res);
    await redisClient.del("prateleiras:/prateleira");
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

prateleiraRouter.put(
  "/:id",
  verificarPermissao("atualizar_prateleira"),
  async (req, res) => {
    const result = await atualizarPrateleira.handle(req, res);
    await Promise.all([
      redisClient.del("prateleiras:/prateleira"),
      redisClient.del(`prateleiras:/prateleira/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

prateleiraRouter.delete(
  "/:id",
  verificarPermissao("eliminar_prateleira"),
  async (req, res) => {
    const result = await deletePrateleira.handle(req, res);
    await Promise.all([
      redisClient.del("prateleiras:/prateleira"),
      redisClient.del(`prateleiras:/prateleira/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  }
);

export { prateleiraRouter };
