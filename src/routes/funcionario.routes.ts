import { Router } from "express";
import { criarFuncionarioController } from "../model/funcionarios/casoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/casoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";
import { AtualizarFuncionarioController } from "../model/funcionarios/casoDeUso/atualizarFuncionario/AtualizarFuncionarioController";
import { DeleteFuncionarioController } from "../model/funcionarios/casoDeUso/deleteFuncionario/DeleteFuncionarioController";

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
