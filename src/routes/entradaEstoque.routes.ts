import { Router } from "express";

import { CriarEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/criarEntradaEstoque/criarEntradaEstoqueController";
import { DeleteEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/deleteEntradaEstoque/DeleteEntradaEstoqueController";
import { AtualizarEntradaEstoqueController } from "../model/entradasEstoque/casoDeUso/atualizarEntradaEstoque/AtualizarEntradaEstoqueController";
import { ListarTodasEntradasEstoqueController } from "../model/entradasEstoque/casoDeUso/listarTodasEntradasEstoque/ListarTodasEntradasEstoqueController";

const entradaEstoqueRoutes = Router();

const criarEntradaEstoque = new CriarEntradaEstoqueController();
const listarTodasEntradasEstoque = new ListarTodasEntradasEstoqueController();
const atualizarEntradaEstoque = new AtualizarEntradaEstoqueController();
const deleteEntradaEstoque = new DeleteEntradaEstoqueController();

entradaEstoqueRoutes.post("/", criarEntradaEstoque.handle);
entradaEstoqueRoutes.get("/", listarTodasEntradasEstoque.handle);
entradaEstoqueRoutes.put("/:id", atualizarEntradaEstoque.handle);
entradaEstoqueRoutes.delete("/:id", deleteEntradaEstoque.handle);

export { entradaEstoqueRoutes };
