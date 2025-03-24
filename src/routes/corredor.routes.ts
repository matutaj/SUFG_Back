import { Router } from "express";

import { CriarCorredorController } from "../model/corredores/casoDeUso/criarCorredor/CriarCorredorController";
import { ListarCorredorPeloNomeController } from "../model/corredores/casoDeUso/listarCorredorPeloNome/ListarCorredorPeloNomeController";
import { ListarTodosCorredorController } from "../model/corredores/casoDeUso/listarTodosCorredores/ListarTodosCorredoresController";
import { AtualizarCorredorController } from "../model/corredores/casoDeUso/atualizarCorredor/AtualizarCorredorController";
import { DeleteCorredorController } from "../model/corredores/casoDeUso/deleteCorredor/DeleteCorredorController";
import { ListarUmCorredorPeloIdController } from "../model/corredores/casoDeUso/listarCorredorPeloId/ListarCorredorPeloIdController";
const corredorRouter = Router();

const criarCorredor = new CriarCorredorController();
const listarCorredorPeloId = new ListarUmCorredorPeloIdController();
const atualizarCorredor = new AtualizarCorredorController();
const deleteCorredor = new DeleteCorredorController();
const listarCorredorPeloNome = new ListarCorredorPeloNomeController();
const listarTodosCorredores = new ListarTodosCorredorController();

corredorRouter.post("/", criarCorredor.handle);
corredorRouter.get("/:id", listarCorredorPeloId.handle);
corredorRouter.put("/", atualizarCorredor.handle);
corredorRouter.delete("/:id", deleteCorredor.handle);
corredorRouter.get("/:nomeCorredor", listarCorredorPeloNome.handle);
corredorRouter.get("/", listarTodosCorredores.handle);

export { corredorRouter };
