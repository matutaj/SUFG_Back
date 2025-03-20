import { Router } from "express";
import { CriarPermissaoController } from "../model/permissoes/casoDeUso/criarPermissao/CriarPermissaoController";
import { ListarPermissaoPeloNomeController } from "../model/permissoes/casoDeUso/listarPermissaoPeloNome/ListarPermissaoPeloNomeController";
import { AtualizarPermissaoController } from "../model/permissoes/casoDeUso/atualizarPermissao/AtualizarPermissaoController";
import { DeletePermissaoController } from "../model/permissoes/casoDeUso/deletePermissao/DeletePermissaoController";

const permissaoRouter = Router();

const criarPermissao = new CriarPermissaoController();
const atualizarPermissao = new AtualizarPermissaoController();
const deletePermissao = new DeletePermissaoController();
const listarPermissaoPeloNome = new ListarPermissaoPeloNomeController();

permissaoRouter.post("/", criarPermissao.handle);
permissaoRouter.put("/", atualizarPermissao.handle);
permissaoRouter.delete("/:id", deletePermissao.handle);
permissaoRouter.get("/:nomePermissao", listarPermissaoPeloNome.handle);

export { permissaoRouter };
