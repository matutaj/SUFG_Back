import { Router } from "express";
import { ListarTodosEstoquesController } from "../model/estoques/casoDeUso/listarTodosEstoques/ListarTodosEstoquesController";
import { ListarUmEstoquePeloIdController } from "../model/estoques/casoDeUso/listarUmEstoquePeloId/ListarUmEstoquePeloIdController";
import { ListarUmEstoquePeloLoteController } from "../model/estoques/casoDeUso/listarUmEstoquePeloLote/ListarUmEstoquePeloLoteController";
import { CriarEstoqueController } from "../model/estoques/casoDeUso/criarEstoque/CriarEstoqueController";
import { AtualizarEstoqueController } from "../model/estoques/casoDeUso/atualizarEstoque/AtualizarEstoqueController";
import { DeleteEstoqueController } from "../model/estoques/casoDeUso/deleteEstoque/DeleteEstoqueController";
const estoqueRouter = Router();

const listarTodosEstoquesController = new ListarTodosEstoquesController();
const listarUmEstoquePeloIdController = new ListarUmEstoquePeloIdController();
const listarUmEstoquePeloLoteController = new ListarUmEstoquePeloLoteController();
const criarEstoqueController = new CriarEstoqueController();
const atualizarEstoqueController = new AtualizarEstoqueController();
const deleteEstoqueController = new DeleteEstoqueController();

estoqueRouter.get("/estoques", listarTodosEstoquesController.handle);           
estoqueRouter.get("/estoques/:id", listarUmEstoquePeloIdController.handle); 
estoqueRouter.get("/estoques/:lote", listarUmEstoquePeloLoteController.handle); 
estoqueRouter.post("/estoques", criarEstoqueController.handle);                
estoqueRouter.put("/estoques/:id", atualizarEstoqueController.handle);             
estoqueRouter.delete("/estoques/:id", deleteEstoqueController.handle);       

export { estoqueRouter };