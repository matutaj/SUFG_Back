import { Router } from "express";

import { CriarCorredorController } from "../model/corredores/casoDeUso/criarCorredor/CriarCorredorController";
import { ListarCorredorPeloNomeController } from "../model/corredores/casoDeUso/listarCorredorPeloNome/ListarCorredorPeloNomeController";
import { ListarTodosCorredorController } from "../model/corredores/casoDeUso/listarTodosCorredores/ListarTodosCorredoresController";
const corredorRoutes = Router();

const criarCorredor = new CriarCorredorController();
const listarCorredorPeloNome = new ListarCorredorPeloNomeController();
const listarTodosCorredores = new ListarTodosCorredorController();

corredorRoutes.post("/", criarCorredor.handle);
corredorRoutes.get("/:nomeCorredor", listarCorredorPeloNome.handle);
corredorRoutes.get("/", listarTodosCorredores.handle);

export { corredorRoutes };
