import { Router } from "express";
import { CriarSeccaoController } from "../model/seccoes/casoDeUso/criarSeccao/CriarSeccaoController";
import { ListarSeccaoPeloNomeController } from "../model/seccoes/casoDeUso/listarSeccaoPeloNome/ListarSeccaoPeloNomeController";
import { ListarTodasSeccoesController } from "../model/seccoes/casoDeUso/listarTodasSeccoes/ListarTodasSeccoesController";
import { AtualizarSeccaoController } from "../model/seccoes/casoDeUso/atualizarSeccao/AtualizarSeccaoController";
import { DeleteSeccaoController } from "../model/seccoes/casoDeUso/deleteSeccao/DeleteSeccaoController";
import { ListarUmaSeccaoPeloIdController } from "../model/seccoes/casoDeUso/listarSeccaoPeloId/ListarSeccaoPeloIdController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const seccaoRouter = Router();

const criarSeccao = new CriarSeccaoController();
const atualizarSeccao = new AtualizarSeccaoController();
const deleteSeccao = new DeleteSeccaoController();
const listarSeccaoPeloId = new ListarUmaSeccaoPeloIdController();
const listarTodasSeccoes = new ListarTodasSeccoesController();
const listarSeccaoPeloNome = new ListarSeccaoPeloNomeController();

seccaoRouter.get(
  "/",
  verificarPermissao("listar_seccao"),
  listarTodasSeccoes.handle
);
seccaoRouter.get(
  "/:id",
  verificarPermissao("listar_seccao"),
  listarSeccaoPeloId.handle
);
seccaoRouter.put(
  "/:id",
  verificarPermissao("atualizar_seccao"),
  atualizarSeccao.handle
);
seccaoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_seccao"),
  deleteSeccao.handle
);
seccaoRouter.post("/", verificarPermissao("criar_seccao"), criarSeccao.handle);

export { seccaoRouter };
