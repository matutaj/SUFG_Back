import { Router } from "express";

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

corredorRouter.post(
  "/",
  verificarPermissao("criar_corredor"),
  criarCorredor.handle
);
corredorRouter.get(
  "/:id",
  verificarPermissao("listar_corredor"),
  listarCorredorPeloId.handle
);
corredorRouter.put(
  "/:id",
  verificarPermissao("atualizar_corredor"),
  atualizarCorredor.handle
);
corredorRouter.delete(
  "/:id",
  verificarPermissao("eliminar_corredor"),
  deleteCorredor.handle
);
corredorRouter.get(
  "/",
  verificarPermissao("listar_corredor"),
  listarTodosCorredores.handle
);

export { corredorRouter };
