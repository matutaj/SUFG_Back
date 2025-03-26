import { Router } from "express";

import { CriarPrateleiraController } from "../model/prateleiras/casoDeUso/criarPrateleira/CriarPrateleiraController";
import { ListarPrateleiraPeloNomeController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloNome/listarPrateleiraPeloNomeController";
import { ListarTodasPrateleirasController } from "../model/prateleiras/casoDeUso/listarTodasPrateleiras/ListarTodasPrateleirasController";
import { AtualizarPrateleiraController } from "../model/prateleiras/casoDeUso/atualizarPrateleira/AtualizarPrateleiraController";
import { DeletePrateleiraController } from "../model/prateleiras/casoDeUso/deletePrateleira/DeletePrateleiraController";
import { ListarUmaPrateleiraPeloIdController } from "../model/prateleiras/casoDeUso/listarPrateleiraPeloId/ListarPrateleiraPeloIdController";

const prateleiraRouter = Router();

const listarPrateleiraPeloId = new ListarUmaPrateleiraPeloIdController();
const criarPrateleira = new CriarPrateleiraController();
const atualizarPrateleira = new AtualizarPrateleiraController();
const deletePrateleira = new DeletePrateleiraController();
const listarPrateleiraPeloNome = new ListarPrateleiraPeloNomeController();
const listarTodasPrateleiras = new ListarTodasPrateleirasController();

prateleiraRouter.get("/", listarTodasPrateleiras.handle);
prateleiraRouter.get("/:id", listarPrateleiraPeloId.handle);
prateleiraRouter.put("/:id", atualizarPrateleira.handle);
prateleiraRouter.delete("/:id", deletePrateleira.handle);
prateleiraRouter.post("/", criarPrateleira.handle);
prateleiraRouter.get("/:nomePrateleira", listarPrateleiraPeloNome.handle);
export { prateleiraRouter };
