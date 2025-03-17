import { Router } from "express";

import { CriarLocalizacaoController } from "../model/localizacoes/casoDeUso/CriarLocalizacaoController";

const localizacaoRouter = Router();

const criarLocalizacao = new CriarLocalizacaoController();

localizacaoRouter.post("/", criarLocalizacao.handle);

export { localizacaoRouter };
