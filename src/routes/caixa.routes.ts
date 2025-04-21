import { Router } from "express";

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

caixaRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_caixa"),
  atualizarCaixa.handle
);
caixaRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_caixa"),
  listarUmCaixaPeloId.handle
);
caixaRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_caixa"),
  deleteCaixa.handle
);
caixaRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_caixa"),
  criarCaixa.handle
);
caixaRouter.get(
  "/:nomeCaixa",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_caixa"),
  listarCaixaPeloNome.handle
);
caixaRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_caixa"),
  listarTodosCaixas.handle
);

export { caixaRouter };
