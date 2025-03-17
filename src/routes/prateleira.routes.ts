import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
import { ListarTodasPrateleirasController } from "../model/prateleiras/casoDeUso/listarTodasPrateleiras/ListarTodasPrateleirasController";

const prateleiraRouter = Router();

const criarPrateleira = new CriarPrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();
const listarTodasPrateleiras = new ListarTodasPrateleirasController();

prateleiraRouter.get("/", listarTodasPrateleiras.handle);
prateleiraRouter.post("/", criarPrateleira.handle);
prateleiraRouter.get("/:nomePrateleira", listarPrateleiraPeloNome.handle);
export { prateleiraRouter };
