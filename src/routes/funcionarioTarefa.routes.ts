import { Router } from "express";
import { CriarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/criarFuncionarioTarefa/CriarFuncionarioTarefaController";
import { ListarTodosFuncionariosTarefasController } from "../model/funcionariosTarefas/casoDeUso/listarTodosFuncionariosTarefas/ListarTodosFuncionariosTarefasController";
import { ListarUmFuncionarioTarefaPeloIdController } from "../model/funcionariosTarefas/casoDeUso/listarFuncionarioTarefaPeloId/ListarFuncionarioTarefaPeloIdController";
import { AtualizarFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/atualizarFuncionarioTarefa/AtualizarFuncionarioTarefaController";
import { DeleteFuncionarioTarefaController } from "../model/funcionariosTarefas/casoDeUso/deleteFuncionarioTarefa/DeleteFuncionarioTarefaController";
const funcionarioTarefaRouter = Router();

const criarFuncionarioTarefaController = new CriarFuncionarioTarefaController();
const listarTodosFuncionariosTarefasController = new ListarTodosFuncionariosTarefasController();
const listarUmFuncionarioTarefaPeloIdController = new ListarUmFuncionarioTarefaPeloIdController();
const atualizarFuncionarioTarefaController = new AtualizarFuncionarioTarefaController();
const eliminarFuncionarioTarefaController = new DeleteFuncionarioTarefaController();


funcionarioTarefaRouter.post("/", criarFuncionarioTarefaController.handle);                  
funcionarioTarefaRouter.get("/", listarTodosFuncionariosTarefasController.handle);          
funcionarioTarefaRouter.get("/:id", listarUmFuncionarioTarefaPeloIdController.handle);     
funcionarioTarefaRouter.put("/:id", atualizarFuncionarioTarefaController.handle);              
funcionarioTarefaRouter.delete("/:id", eliminarFuncionarioTarefaController.handle);        

export { funcionarioTarefaRouter };