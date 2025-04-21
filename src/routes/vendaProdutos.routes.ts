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
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("criar_venda_produto"),
  criarVendaProduto.handle
);
vendaProdutoRouter.get(
  "/",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_venda_produto"),
  listarTodasVendasProdutos.handle
);
vendaProdutoRouter.get(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("listar_venda_produto"),
  listarVendaProdutoPorId.handle
);
vendaProdutoRouter.put(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("atualizar_venda_produto"),
  atualizarVendaProduto.handle
);
vendaProdutoRouter.delete(
  "/:id",
  verificarRoles(["Admin", "Gerente", "Operador de caixa"]),
  verificarPermissao("eliminar_venda_produto"),
  eliminarVendaProduto.handle
);

export { vendaProdutoRouter };
