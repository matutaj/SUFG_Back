import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
import { ListarTodasPrateleirasController } from "../model/prateleiras/casoDeUso/listarTodasPrateleiras/ListarTodasPrateleirasController";
import { AtualizarPrateleiraController } from "../model/prateleiras/casoDeUso/atualizarPrateleira/AtualizarPrateleiraController";
import { DeletePrateleiraController } from "../model/prateleiras/casoDeUso/deletePrateleira/DeletePrateleiraController";

const prateleiraRouter = Router();

const criarPrateleira = new CriarPrateleiraController();
const atualizarPrateleira = new AtualizarPrateleiraController();
const deletePrateleira = new DeletePrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();
const listarTodasPrateleiras = new ListarTodasPrateleirasController();

prateleiraRouter.get("/", listarTodasPrateleiras.handle);
prateleiraRouter.put("/", atualizarPrateleira.handle);
prateleiraRouter.delete("/", deletePrateleira.handle);
prateleiraRouter.post("/", criarPrateleira.handle);
prateleiraRouter.get("/:nomePrateleira", listarPrateleiraPeloNome.handle);
export { prateleiraRouter };
