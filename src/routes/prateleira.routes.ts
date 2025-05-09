import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
import { ListarTodasPrateleirasController } from "../model/prateleiras/casoDeUso/listarTodasPrateleiras/ListarTodasPrateleirasController";
import { AtualizarPrateleiraController } from "../model/prateleiras/casoDeUso/atualizarPrateleira/AtualizarPrateleiraController";
import { DeletePrateleiraController } from "../model/prateleiras/casoDeUso/deletePrateleira/DeletePrateleiraController";
import { ListarUmaPrateleiraPeloIdController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloId/ListarPrateleiraPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

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
  listarTodasPrateleiras.handle
);
prateleiraRouter.get(
  "/:id",
  verificarPermissao("listar_prateleira"),
  listarPrateleiraPeloId.handle
);
prateleiraRouter.put(
  "/:id",
  verificarPermissao("atualizar_prateleira"),
  atualizarPrateleira.handle
);
prateleiraRouter.delete(
  "/:id",
  verificarPermissao("eliminar_prateleira"),
  deletePrateleira.handle
);
prateleiraRouter.post(
  "/",
  verificarPermissao("criar_prateleira"),
  criarPrateleira.handle
);
export { prateleiraRouter };
