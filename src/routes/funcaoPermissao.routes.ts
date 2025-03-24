import { Router } from "express";

import { CriarFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/criarFuncaoPermissao/CriarFuncaoPermissaoController";
import { ListarUmaFuncaoPermissaoPeloIdController } from "../model/funcoesPermissoes/casoDeUso/listarUmaFuncaoPermissaoPeloId/ListarUmaFuncaoPermissaoPeloIdController";
import { AtualizarFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/atualizarFuncaoPermissao/AtualizarFuncaoPermissaoController";
import { DeleteFuncaoPermissaoController } from "../model/funcoesPermissoes/casoDeUso/eliminarFuncaoPermissao/EliminarFuncaoPermissaoController";

const funcaoPermissaoRoutes = Router();

const criarFuncaoPermissao = new CriarFuncaoPermissaoController();
const listarUmaFuncaoPermissaoPeloId = new ListarUmaFuncaoPermissaoPeloIdController();
const atualizarFuncaoPermissao = new AtualizarFuncaoPermissaoController();
const deleteFuncaoPermissao = new DeleteFuncaoPermissaoController();

funcaoPermissaoRoutes.post("/", criarFuncaoPermissao.handle);
funcaoPermissaoRoutes.get("/:id_funcao/:id_permissao", listarUmaFuncaoPermissaoPeloId.handle);
funcaoPermissaoRoutes.put("/", atualizarFuncaoPermissao.handle);
funcaoPermissaoRoutes.delete("/:id", deleteFuncaoPermissao.handle);

export { funcaoPermissaoRoutes };