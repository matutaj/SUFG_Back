import { Router } from "express";
import { CriarFuncaoController } from "../model/funcoes/casoDeUso/criarFuncao/CriarFuncaoController";

const funcaoRouter = Router();

const criarFuncao = new CriarFuncaoController();

funcaoRouter.post("/", criarFuncao.handle);

export { funcaoRouter };