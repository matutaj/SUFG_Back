import { Router } from "express";
import { CriarSeccaoController } from "../model/seccoes/casoDeUso/criarSeccao/CriarSeccaoController";
import { ListarSeccaoPeloNomeController } from "../model/seccoes/casoDeUso/listarSeccaoPeloNome/ListarSeccaoPeloNomeController";
import { ListarTodasSeccoesController } from "../model/seccoes/casoDeUso/listarTodasSeccoes/ListarTodasSeccoesController";
import { AtualizarSeccaoController } from "../model/seccoes/casoDeUso/atualizarSeccao/AtualizarSeccaoController";
import { DeleteSeccaoController } from "../model/seccoes/casoDeUso/deleteSeccao/DeleteSeccaoController";

const seccaoRouter = Router();

const criarSeccao = new CriarSeccaoController();
const atualizarSeccao = new AtualizarSeccaoController();
const deleteSeccao = new DeleteSeccaoController();
const listarTodasSeccoes = new ListarTodasSeccoesController();
const listarSeccaoPeloNome = new ListarSeccaoPeloNomeController();

seccaoRouter.get("/", listarTodasSeccoes.handle);
seccaoRouter.put("/", atualizarSeccao.handle);
seccaoRouter.delete("/", deleteSeccao.handle);
seccaoRouter.get("/:nomeSeccao", listarSeccaoPeloNome.handle);
seccaoRouter.post("/", criarSeccao.handle);

export { seccaoRouter };
