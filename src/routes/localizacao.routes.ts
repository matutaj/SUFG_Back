import { Router } from "express";

import { CriarLocalizacaoController } from "../model/localizacoes/casoDeUso/criarLocalizacao/CriarLocalizacaoController";
import { AtualizarLocalizacaoController } from "../model/localizacoes/casoDeUso/atualizarLocalizacao/AtualizarLocalizacaoController";
import { DeleteLocalizacaoController } from "../model/localizacoes/casoDeUso/deleteLocalizacao/DeleteLocalizacaoController";
import { ListarUmLocalizacaoPeloIdController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloId/ListarLocalizacaoPeloIdController";
import { ListarUmLocalizacaoPeloNomeController } from "../model/localizacoes/casoDeUso/listarLocalizacaoPeloNome/ListarLocalizacaoPeloNomeController";
import { ListarTodosLocalizacoesController } from "../model/localizacoes/casoDeUso/listarTodasLocalizacoes/ListarTodasLocalizacoesController";

const localizacaoRouter = Router();

const criarLocalizacao = new CriarLocalizacaoController();
const listarTodasLocalizacoes = new ListarTodosLocalizacoesController();
const listarUmLocalizacaoPeloId = new ListarUmLocalizacaoPeloIdController();
const listarUmLocalizacaoPeloNome = new ListarUmLocalizacaoPeloNomeController();
const atualizarLocalizacao = new AtualizarLocalizacaoController();
const deleteLocalizacao = new DeleteLocalizacaoController();

localizacaoRouter.put("/:id", atualizarLocalizacao.handle);
localizacaoRouter.get("/", listarTodasLocalizacoes.handle);
localizacaoRouter.get("/:id", listarUmLocalizacaoPeloId.handle);
localizacaoRouter.get("/:nomeLocalizacao", listarUmLocalizacaoPeloNome.handle);
localizacaoRouter.delete("/:id", deleteLocalizacao.handle);
localizacaoRouter.post("/", criarLocalizacao.handle);

export { localizacaoRouter };
