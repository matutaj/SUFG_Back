import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
const prateleiraRouter = Router();

const criarPrateleira = new CriarPrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();

prateleiraRouter.post("/", criarPrateleira.handle);
prateleiraRouter.get("/:nomePrateleira", listarPrateleiraPeloNome.handle);
export { prateleiraRouter };
