import { Router } from "express";
import { CriarTarefaController } from "../model/tarefas/casoDeUso/criarTarefa/CriarTarefaController";
import { ListarTodasTarefasController } from "../model/tarefas/casoDeUso/listarTodasTarefas/ListarTodasTarefasController";
import { ListarTarefaPeloIdController } from "../model/tarefas/casoDeUso/listarTarefaPeloId/ListarTarefaPeloIdController";
import { ListarTarefaPeloNomeController } from "../model/tarefas/casoDeUso/listarTarefaPeloNome/ListarTarefaPeloNomeController";
import { AtualizarTarefaController } from "../model/tarefas/casoDeUso/atualizarTarefa/AtualizarTarefaController";
import { DeleteTarefaController } from "../model/tarefas/casoDeUso/deleteTarefa/DeleteTarefaController";
const tarefaRouter = Router();

const criarTarefaController = new CriarTarefaController();
const listarTodasTarefasController = new ListarTodasTarefasController();
const listarTarefaPeloIdController = new ListarTarefaPeloIdController();
const listarTarefaPeloNomeController = new ListarTarefaPeloNomeController();
const atualizarTarefaController = new AtualizarTarefaController();
const eliminarTarefaController = new DeleteTarefaController();


tarefaRouter.post("/", criarTarefaController.handle);                  
tarefaRouter.get("/", listarTodasTarefasController.handle);           
tarefaRouter.get("/:id", listarTarefaPeloIdController.handle);    
tarefaRouter.get("/:nome", listarTarefaPeloNomeController.handle); 
tarefaRouter.put("/:id", atualizarTarefaController.handle);              
tarefaRouter.delete("/:id", eliminarTarefaController.handle);        

export { tarefaRouter };