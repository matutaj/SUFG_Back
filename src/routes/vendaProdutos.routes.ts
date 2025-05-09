import { Router } from "express";
import { CriarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/criarVendaProduto/CriarVendaProdutoController";
import { listarTodasVendasProdutosController } from "../model/vendasProdutos/casoDeUso/listarTodasVendasProdutos/ListarTodasVendasProdutosController";
import { ListarVendaProdutoPorIdController } from "../model/vendasProdutos/casoDeUso/listarVendaProdutoPeloId/ListarVendaProdutoPeloIdController";
import { AtualizarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/atualizarVendaProduto/AtualizarVendaProdutoController";
import { DeleteVendaProdutoController } from "../model/vendasProdutos/casoDeUso/eliminarVendaProduto/EliminarVendaProdutoController";
import { verificarPermissao, verificarRoles } from "../middlewares/permissoes";

const vendaProdutoRouter = Router();

const criarVendaProduto = new CriarVendaProdutoController();
const atualizarVendaProduto = new AtualizarVendaProdutoController();
const listarTodasVendasProdutos = new listarTodasVendasProdutosController();
const listarVendaProdutoPorId = new ListarVendaProdutoPorIdController();
const eliminarVendaProduto = new DeleteVendaProdutoController();

vendaProdutoRouter.post(
  "/",
  verificarPermissao("criar_venda_produto"),
  criarVendaProduto.handle
);
vendaProdutoRouter.get(
  "/",
  verificarPermissao("listar_venda_produto"),
  listarTodasVendasProdutos.handle
);
vendaProdutoRouter.get(
  "/:id",
  verificarPermissao("listar_venda_produto"),
  listarVendaProdutoPorId.handle
);
vendaProdutoRouter.put(
  "/:id",
  verificarPermissao("atualizar_venda_produto"),
  atualizarVendaProduto.handle
);
vendaProdutoRouter.delete(
  "/:id",
  verificarPermissao("eliminar_venda_produto"),
  eliminarVendaProduto.handle
);

export { vendaProdutoRouter };
