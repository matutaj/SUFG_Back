import { Router } from "express";
import { CriarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/criarFuncionarioCaixa/CriarFuncionarioCaixaController";
import { DeleteFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/deleteFuncionarioCaixa/DeleteFuncionarioCaixaController";
import { ListarUmFuncionarioCaixaPelaAberturaController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPelaAbertura/ListarUmFuncionarioCaixaPelaAberturaController";
import { ListarEstadoCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarEstadoCaixa/ListarEstadoCaixaController";
import { ListarUmFuncionarioCaixaPeloIdController } from "../model/funcionariosCaixa/casoDeUso/listarUmFuncionarioCaixaPeloID/ListarUmFuncionarioCaixaPeloIDController";
import { AtualizarFuncionarioCaixaController } from "../model/funcionariosCaixa/casoDeUso/atualizarFuncionarioCaixa/AtualizarFuncionarioCaixaController";
import { ListarTodosFuncionariosCaixaController } from "../model/funcionariosCaixa/casoDeUso/listarTodosFuncionariosCaixa/ListarTodosFuncionariosCaixaController";
const funcionariorCaixaRouter = Router();

const criarFuncionarioCaixa = new CriarFuncionarioCaixaController();
const deleteFuncionarioCaixa = new DeleteFuncionarioCaixaController();
const listarTodosFuncionariosCaixa =
  new ListarTodosFuncionariosCaixaController();
const atualizarFuncionarioCaixa = new AtualizarFuncionarioCaixaController();
const listarUmFuncionarioCaixaPeloId =
  new ListarUmFuncionarioCaixaPeloIdController();
const listarEstadoCaixa = new ListarEstadoCaixaController();
const listarUmFuncionarioCaixaPelaAbertura =
  new ListarUmFuncionarioCaixaPelaAberturaController();

funcionariorCaixaRouter.post("/", criarFuncionarioCaixa.handle);
funcionariorCaixaRouter.get("/", listarTodosFuncionariosCaixa.handle);
funcionariorCaixaRouter.get("/:id", listarUmFuncionarioCaixaPeloId.handle);
funcionariorCaixaRouter.get(
  "/:abertura",
  listarUmFuncionarioCaixaPelaAbertura.handle
);
funcionariorCaixaRouter.get("/:estado", listarEstadoCaixa.handle);
funcionariorCaixaRouter.put("/:id", atualizarFuncionarioCaixa.handle);
funcionariorCaixaRouter.delete("/:id", deleteFuncionarioCaixa.handle);

export { funcionariorCaixaRouter };
