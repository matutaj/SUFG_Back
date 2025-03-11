import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
const prateleiraRoute = Router();

const criarPrateleira = new CriarPrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();

prateleiraRoute.post("/", criarPrateleira.handle);
prateleiraRoute.get("/:nomePrateleira", listarPrateleiraPeloNome.handle);
export { prateleiraRoute };
