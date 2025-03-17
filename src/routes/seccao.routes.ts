import { Router } from "express";
import { CriarSeccaoController } from "../model/seccoes/casoDeUso/criarSeccao/CriarSeccaoController";
import { ListarSeccaoPeloNomeController } from "../model/seccoes/casoDeUso/listarSeccaoPeloNome/ListarSeccaoPeloNomeController";
import { ListarTodasSeccoesController } from "../model/seccoes/casoDeUso/listarTodasSeccoes/ListarTodasSeccoesController";


const seccaoRouter = Router();

const criarSeccao = new CriarSeccaoController();
const listarTodasSeccoes = new ListarTodasSeccoesController();
const listarSeccaoPeloNome = new ListarSeccaoPeloNomeController();

seccaoRouter.get("/", listarTodasSeccoes.handle);
seccaoRouter.get("/:nomeSeccao", listarSeccaoPeloNome.handle);
seccaoRouter.post("/", criarSeccao.handle);

export { seccaoRouter };
