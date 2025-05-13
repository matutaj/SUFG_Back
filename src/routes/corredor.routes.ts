import { Router } from "express";
//import { redisClient } from "../server";
//import { cacheMiddleware } from "../middlewares/cacheMiddlewares";
import { CriarCorredorController } from "../model/corredores/casoDeUso/criarCorredor/CriarCorredorController";
import { ListarCorredorPeloNomeController } from "../model/corredores/casoDeUso/listarCorredorPeloNome/ListarCorredorPeloNomeController";
import { ListarTodosCorredorController } from "../model/corredores/casoDeUso/listarTodosCorredores/ListarTodosCorredoresController";
import { AtualizarCorredorController } from "../model/corredores/casoDeUso/atualizarCorredor/AtualizarCorredorController";
import { DeleteCorredorController } from "../model/corredores/casoDeUso/deleteCorredor/DeleteCorredorController";
import { ListarUmCorredorPeloIdController } from "../model/corredores/casoDeUso/listarCorredorPeloId/ListarCorredorPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const corredorRouter = Router();

const criarCorredor = new CriarCorredorController();
const listarCorredorPeloId = new ListarUmCorredorPeloIdController();
const atualizarCorredor = new AtualizarCorredorController();
const deleteCorredor = new DeleteCorredorController();
const listarCorredorPeloNome = new ListarCorredorPeloNomeController();
const listarTodosCorredores = new ListarTodosCorredorController();

corredorRouter.get(
  "/",
  verificarPermissao("listar_corredor"),
  //cacheMiddleware("corredores"),
  listarTodosCorredores.handle
);

corredorRouter.get(
  "/:id",
  verificarPermissao("listar_corredor"),
  //cacheMiddleware("corredores"),
  listarCorredorPeloId.handle
);

corredorRouter.get(
  "/nome/:nome",
  verificarPermissao("listar_corredor"),
  //cacheMiddleware("corredores"),
  listarCorredorPeloNome.handle
);

corredorRouter.post(
  "/",
  verificarPermissao("criar_corredor")
  /*   async (req, res) => {
    const result = await criarCorredor.handle(req, res);
    await redisClient.del("corredores:/corredor");
    // .catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

corredorRouter.put(
  "/:id",
  verificarPermissao("atualizar_corredor")
  /*   async (req, res) => {
    const result = await atualizarCorredor.handle(req, res);
    await Promise.all([
      redisClient.del("corredores:/corredor"),
      redisClient.del(`corredores:/corredor/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

corredorRouter.delete(
  "/:id",
  verificarPermissao("eliminar_corredor")
  /*   async (req, res) => {
    const result = await deleteCorredor.handle(req, res);
    await Promise.all([
      redisClient.del("corredores:/corredor"),
      redisClient.del(`corredores:/corredor/${req.params.id}`),
    ]);
    //.catch((err) => console.error("Erro ao invalidar cache:", err));
    return result;
  } */
);

export { corredorRouter };
