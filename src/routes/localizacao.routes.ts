import { Router } from "express";

import { CriarLocalizacaoController } from "../model/localizacoes/casoDeUso/criarLocalizacao/CriarLocalizacaoController";
import { AtualizarLocalizacaoController } from "../model/localizacoes/casoDeUso/atualizarLocalizacao/AtualizarLocalizacaoController";
import { DeleteLocalizacaoController } from "../model/localizacoes/casoDeUso/deleteLocalizacao/DeleteLocalizacaoController";

const localizacaoRouter = Router();

const criarLocalizacao = new CriarLocalizacaoController();
const atualizarLocalizacao = new AtualizarLocalizacaoController();
const deleteLocalizacao = new DeleteLocalizacaoController();

localizacaoRouter.put("/", atualizarLocalizacao.handle);
localizacaoRouter.delete("/:id", deleteLocalizacao.handle);
localizacaoRouter.post("/", criarLocalizacao.handle);

export { localizacaoRouter };
