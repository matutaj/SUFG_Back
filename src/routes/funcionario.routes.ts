import { Router } from "express";
import { criarFuncionarioController } from "../model/funcionarios/casoDeUso/criarFuncionario/CriarFuncionarioController";
import { ListarTodosFuncionariosController } from "../model/funcionarios/casoDeUso/listarTodosFuncionarios/ListarTodosFuncionariosController";
import { ListarFuncionarioPeloNomeController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloNome/ListarFuncionarioPeloNomeController";
import { AtualizarFuncionarioController } from "../model/funcionarios/casoDeUso/atualizarFuncionario/AtualizarFuncionarioController";
import { DeleteFuncionarioController } from "../model/funcionarios/casoDeUso/deleteFuncionario/DeleteFuncionarioController";
import { ListarUmFuncionarioPeloIdController } from "../model/funcionarios/casoDeUso/listarFuncionarioPeloId/ListarFuncionarioPeloIdController";
import { ListarEmailFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioEmail/ListarFuncionarioEmailController";
import { ListarTelefoneFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioTelefone/ListarFuncionarioTelefoneController";
import { ListarNumeroContribuinteFuncionarioController } from "../model/funcionarios/casoDeUso/listarFuncionarioNumeroContribuinte/ListarFuncionarioNumeroContribuinteController";
const funcionarioRouter = Router();

const criarFuncionario = new criarFuncionarioController();
const listarFuncionarioPeloId = new ListarUmFuncionarioPeloIdController();
const listarFuncionarioEmail = new ListarEmailFuncionarioController();
const listarFuncionarioTelefone = new ListarTelefoneFuncionarioController();
const listarFuncionarioNumeroContribuinte =
  new ListarNumeroContribuinteFuncionarioController();
const atualizarFuncionario = new AtualizarFuncionarioController();
const deleteFuncionario = new DeleteFuncionarioController();
const listarFuncionarioPeloNome = new ListarFuncionarioPeloNomeController();
const listarTodosFuncionarios = new ListarTodosFuncionariosController();

funcionarioRouter.post("/", criarFuncionario.handle);
funcionarioRouter.get("/:id", listarFuncionarioPeloId.handle);
funcionarioRouter.get("/email/:email", listarFuncionarioEmail.handle);
funcionarioRouter.get("/telefone/:telefone", listarFuncionarioTelefone.handle);
funcionarioRouter.get(
  "/contribuinte/:contribuinte",
  listarFuncionarioNumeroContribuinte.handle
);
funcionarioRouter.put("/:id", atualizarFuncionario.handle);
funcionarioRouter.delete("/:id", deleteFuncionario.handle);
funcionarioRouter.get("/", listarTodosFuncionarios.handle);
funcionarioRouter.get("/:nomeFuncionario", listarFuncionarioPeloNome.handle);

export { funcionarioRouter };
