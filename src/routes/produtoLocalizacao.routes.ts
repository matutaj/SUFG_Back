import { Router } from "express";

import { CriarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/criarProdutoLocalizacao/CriarProdutoLocalizacaoController";
import { AtualizarProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/atualizarProdutoLocalizacao/AtualizarProdutoLocalizacaoController";
import { ListarUmProdutoLocalizacaoPorIdController } from "../model/produtosLocalizacoes/casoDeUso/listarProdutoLocalizacaoPeloId/ListarProdutoLocalizacaoPeloIdController";
import { ListarTodosProdutosLocalizacoesController } from "../model/produtosLocalizacoes/casoDeUso/listarTodosProdutosLocalizacoes/ListarTodosProdutosLocalizacoesController";
import { DeleteProdutoLocalizacaoController } from "../model/produtosLocalizacoes/casoDeUso/deleteProdutoLocalizacao/DeleteProdutoLocalizacaoController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const produtoLocalizacaoRouter = Router();

const criarProdutoLocalizacao = new CriarProdutoLocalizacaoController();
const atualizarProdutoLocalizacao = new AtualizarProdutoLocalizacaoController();
const listarUmProdutoLocalizacaoPorId =
  new ListarUmProdutoLocalizacaoPorIdController();
const listarTodosProdutosLocalizacoes =
  new ListarTodosProdutosLocalizacoesController();
const deleteProdutoLocalizacao = new DeleteProdutoLocalizacaoController();

produtoLocalizacaoRouter.post(
  "/",
  verificarPermissao("criar_produto_localizacao"),
  criarProdutoLocalizacao.handle
);
produtoLocalizacaoRouter.put(
  "/:id",
  verificarPermissao("atualizar_produto_localizacao"),
  atualizarProdutoLocalizacao.handle
);
produtoLocalizacaoRouter.get(
  "/:id",
  verificarPermissao("listar_produto_localizacao"),
  listarUmProdutoLocalizacaoPorId.handle
);
produtoLocalizacaoRouter.get(
  "/",
  verificarPermissao("listar_produto_localizacao"),
  listarTodosProdutosLocalizacoes.handle
);
produtoLocalizacaoRouter.delete(
  "/:id",
  verificarPermissao("deletar_produto_localizacao"),
  deleteProdutoLocalizacao.handle
);

export { produtoLocalizacaoRouter };
