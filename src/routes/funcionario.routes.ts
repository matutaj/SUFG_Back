import { Router } from "express";
import { criarFuncionarioController } from "../model/funcionarios/casoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/casoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";

const funcionarioRouter = Router();

const criarFuncionario = new criarFuncionarioController();

const listarFuncionarioPeloNome = new ListarFuncionarioPeloNomeController();
const listarTodosFuncionarios = new ListarTodosFuncionariosController();

funcionarioRouter.post("/", criarFuncionario.handle);
funcionarioRouter.get("/", listarTodosFuncionarios.handle);
funcionarioRouter.get("/:nomeFuncionario", listarFuncionarioPeloNome.handle);

export { funcionarioRouter };
