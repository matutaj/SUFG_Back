import { Router } from "express";

import { CriarCaixaController } from "../model/caixas/casoDeUso/criarCaixa/CriarCaixaController";
import { ListarCaixaPeloNomeController } from "../model/caixas/casoDeUso/listarCaixaPeloNome/ListarCaixaPeloNomeController";
import { ListarTodosCaixasController } from "../model/caixas/casoDeUso/listarTodosCaixas/ListarTodosCaixasController";
import { AtualizarCaixaController } from "../model/caixas/casoDeUso/atualizarCaixa/AtualizarCaixaController";
import { DeleteCaixaController } from "../model/caixas/casoDeUso/deleteCaixa/DeleteCaixaController";

const caixaRouter = Router();

const atualizarCaixa = new AtualizarCaixaController();
const deleteCaixa = new DeleteCaixaController();
const criarCaixa = new CriarCaixaController();
const listarCaixaPeloNome = new ListarCaixaPeloNomeController();
const listarTodosCaixas = new ListarTodosCaixasController();

caixaRouter.put("/", atualizarCaixa.handle);
caixaRouter.delete("/:id", deleteCaixa.handle);
caixaRouter.post("/", criarCaixa.handle);
caixaRouter.get("/:nomeCaixa", listarCaixaPeloNome.handle);
caixaRouter.get("/", listarTodosCaixas.handle);

export { caixaRouter };
