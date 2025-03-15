import { Router } from "express";
import { CriarSeccaoController } from "../model/seccoes/casoDeUso/criarSeccao/CriarSeccaoController";

const seccaoRouter = Router();

const criarSeccao = new CriarSeccaoController();

seccaoRouter.post("/", criarSeccao.handle);

export { seccaoRouter };
