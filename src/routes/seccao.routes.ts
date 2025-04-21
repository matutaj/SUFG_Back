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
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_seccao"),
  listarTodasSeccoes.handle
);
seccaoRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("listar_seccao"),
  listarSeccaoPeloId.handle
);
seccaoRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("atualizar_seccao"),
  atualizarSeccao.handle
);
seccaoRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("eliminar_seccao"),
  deleteSeccao.handle
);
seccaoRouter.post(
  "/",
  verificarRoles(["Admin", "Gerente"]),
  verificarPermissao("criar_seccao"),
  criarSeccao.handle
);

export { seccaoRouter };
