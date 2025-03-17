import { Router } from "express";
import { CriarPermissaoController } from "../model/permissoes/casoDeUso/criarPermissao/CriarPermissaoController";
import { ListarPermissaoPeloNomeController } from "../model/permissoes/casoDeUso/listarPermissaoPeloNome/ListarPermissaoPeloNomeController";

const permissaoRouter = Router();

const criarPermissao = new CriarPermissaoController();

const listarPermissaoPeloNome = new ListarPermissaoPeloNomeController();

permissaoRouter.post("/", criarPermissao.handle);
permissaoRouter.get("/:nomePermissao", listarPermissaoPeloNome.handle);

export { permissaoRouter };
