import { Router } from "express";

import { CriarCorredorController } from "../model/corredores/casoDeUso/criarCorredor/CriarCorredorController";
import { ListarCorredorPeloNomeController } from "../model/corredores/casoDeUso/listarCorredorPeloNome/ListarCorredorPeloNomeController";
import { ListarTodosCorredorController } from "../model/corredores/casoDeUso/listarTodosCorredores/ListarTodosCorredoresController";
const corredorRouter = Router();

const criarCorredor = new CriarCorredorController();
const listarCorredorPeloNome = new ListarCorredorPeloNomeController();
const listarTodosCorredores = new ListarTodosCorredorController();

corredorRouter.post("/", criarCorredor.handle);
corredorRouter.get("/:nomeCorredor", listarCorredorPeloNome.handle);
corredorRouter.get("/", listarTodosCorredores.handle);

export { corredorRouter };
