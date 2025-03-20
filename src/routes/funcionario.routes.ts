import { Router } from "express";
import { criarFuncionarioController } from "../model/funcionarios/CasoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/CasoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/CasoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";
import { AtualizarFuncionarioController } from "../model/funcionarios/CasoDeUso/atualizarFuncionario/AtualizarFuncionarioController";
import { DeleteFuncionarioController } from "../model/funcionarios/CasoDeUso/deleteFuncionario/DeleteFuncionarioController";

const funcionarioRouter = Router();

const criarFuncionario = new criarFuncionarioController();
const atualizarFuncionario = new AtualizarFuncionarioController();
const deleteFuncionario = new DeleteFuncionarioController();
const listarFuncionarioPeloNome = new ListarFuncionarioPeloNomeController();
const listarTodosFuncionarios = new ListarTodosFuncionariosController();

funcionarioRouter.post("/", criarFuncionario.handle);
funcionarioRouter.put("/", atualizarFuncionario.handle);
funcionarioRouter.delete("/:id", deleteFuncionario.handle);
funcionarioRouter.get("/", listarTodosFuncionarios.handle);
funcionarioRouter.get("/:nomeFuncionario", listarFuncionarioPeloNome.handle);

export { funcionarioRouter };
