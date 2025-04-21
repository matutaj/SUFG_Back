import { Router } from "express";

import { CriarLocalizacaoController } from "../model/localizacoes/casoDeUso/criarLocalizacao/CriarLocalizacaoController";
import { AtualizarLocalizacaoController } from "../model/localizacoes/casoDeUso/atualizarLocalizacao/AtualizarLocalizacaoController";
import { DeleteLocalizacaoController } from "../model/localizacoes/casoDeUso/deleteLocalizacao/DeleteLocalizacaoController";
import { ListarUmLocalizacaoPeloIdController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloId/ListarLocalizacaoPeloIdController";
import { ListarUmLocalizacaoPeloNomeController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloNome/ListarLocalizacaoPeloNomeController";
import { ListarTodosLocalizacoesController } from "../model/localizacoes/casoDeUso/listarTodasLocalizacoes/ListarTodasLocalizacoesController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const localizacaoRouter = Router();

const criarLocalizacao = new CriarLocalizacaoController();
const listarTodasLocalizacoes = new ListarTodosLocalizacoesController();
const listarUmLocalizacaoPeloId = new ListarUmLocalizacaoPeloIdController();
const listarUmLocalizacaoPeloNome = new ListarUmLocalizacaoPeloNomeController();
const atualizarLocalizacao = new AtualizarLocalizacaoController();
const deleteLocalizacao = new DeleteLocalizacaoController();

localizacaoRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_localizacao"),
  atualizarLocalizacao.handle
);
localizacaoRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_localizacao   "),
  listarTodasLocalizacoes.handle
);
localizacaoRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_localizacao"),
  listarUmLocalizacaoPeloId.handle
);
localizacaoRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_localizacao"),
  deleteLocalizacao.handle
);
localizacaoRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_localizacao"),
  criarLocalizacao.handle
);

export { localizacaoRouter };
