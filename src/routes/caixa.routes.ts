import { Router } from "express";

import { CriarCaixaController } from "../model/caixas/casoDeUso/criarCaixa/CriarCaixaController";
import { ListarCaixaPeloNomeController } from "../model/caixas/casoDeUso/listarCaixaPeloNome/ListarCaixaPeloNomeController";
import { ListarTodosCaixasController } from "../model/caixas/casoDeUso/listarTodosCaixas/ListarTodosCaixasController";
const caixaRouter = Router();

const criarCaixa = new CriarCaixaController();
const listarCaixaPeloNome = new ListarCaixaPeloNomeController();
const listarTodosCaixas = new ListarTodosCaixasController();

caixaRouter.post("/", criarCaixa.handle);
caixaRouter.get("/:nomeCaixa", listarCaixaPeloNome.handle);
caixaRouter.get("/", listarTodosCaixas.handle);

export { caixaRouter };
