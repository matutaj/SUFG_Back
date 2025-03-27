import { Router } from "express";
import { CriarPermissaoController } from "../model/permissoes/casoDeUso/criarPermissao/CriarPermissaoController";
import { ListarPermissaoPeloNomeController } from "../model/permissoes/casoDeUso/listarPermissaoPeloNome/ListarPermissaoPeloNomeController";
import { AtualizarPermissaoController } from "../model/permissoes/casoDeUso/atualizarPermissao/AtualizarPermissaoController";
import { DeletePermissaoController } from "../model/permissoes/casoDeUso/deletePermissao/DeletePermissaoController";
import { ListarUmaPermissaoPorIdController } from "../model/permissoes/casoDeUso/listarPermissaoPeloId/ListarPermissaoPeloIdController";
import { ListarTodasPermissoesController } from "../model/permissoes/casoDeUso/listarTodasPermissoes/ListarTodasPermissoesController";

const permissaoRouter = Router();

const criarPermissao = new CriarPermissaoController();
const listarPermissaoPeloId = new ListarUmaPermissaoPorIdController();
const listarTodasPermissoes = new ListarTodasPermissoesController();
const atualizarPermissao = new AtualizarPermissaoController();
const deletePermissao = new DeletePermissaoController();
const listarPermissaoPeloNome = new ListarPermissaoPeloNomeController();

permissaoRouter.post("/", criarPermissao.handle);
permissaoRouter.get("/", listarTodasPermissoes.handle);
permissaoRouter.get("/:id", listarPermissaoPeloId.handle);
permissaoRouter.put("/:id", atualizarPermissao.handle);
permissaoRouter.delete("/:id", deletePermissao.handle);
permissaoRouter.get("/:nomePermissao", listarPermissaoPeloNome.handle);

export { permissaoRouter };
