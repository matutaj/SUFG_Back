import { Router } from "express";
import { CriarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/criarFuncionarioCaixa/CriarFuncionarioCaixaController";

const funcionariorCaixaRouter = Router();

const criarFuncionarioCaixa = new CriarFuncionarioCaixaController();

funcionariorCaixaRouter.post("/", criarFuncionarioCaixa.handle);

export { funcionariorCaixaRouter };
