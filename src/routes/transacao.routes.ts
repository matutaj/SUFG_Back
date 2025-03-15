import { Router } from "express";
import { CriarTransacaoController } from "../model/transacoes/casoDeUso/criarTransacao/CriarTransacaoController";

const transacaoRouter = Router();

const criarTransacao = new CriarTransacaoController();

transacaoRouter.post("/", criarTransacao.handle);

export { transacaoRouter };