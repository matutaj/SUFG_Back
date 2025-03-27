import { Router } from "express";
import { CriarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/criarVendaProduto/CriarVendaProdutoController";
import { listarTodasVendasProdutosController } from "../model/vendasProdutos/casoDeUso/listarTodasVendasProdutos/ListarTodasVendasProdutosController";
import { ListarVendaProdutoPorIdController } from "../model/vendasProdutos/casoDeUso/listarVendaProdutoPeloId/ListarVendaProdutoPeloIdController";
import { AtualizarVendaProdutoController } from "../model/vendasProdutos/casoDeUso/atualizarVendaProduto/AtualizarVendaProdutoController";
import { DeleteVendaProdutoController } from "../model/vendasProdutos/casoDeUso/eliminarVendaProduto/EliminarVendaProdutoController";

const vendaProdutoRouter = Router();

const criarVendaProduto = new CriarVendaProdutoController();
const atualizarVendaProduto = new AtualizarVendaProdutoController();
const listarTodasVendasProdutos = new listarTodasVendasProdutosController();
const listarVendaProdutoPorId = new ListarVendaProdutoPorIdController();
const eliminarVendaProduto = new DeleteVendaProdutoController();

vendaProdutoRouter.post("/", criarVendaProduto.handle);
vendaProdutoRouter.get("/", listarTodasVendasProdutos.handle);
vendaProdutoRouter.get("/:id", listarVendaProdutoPorId.handle);
vendaProdutoRouter.put("/:id", atualizarVendaProduto.handle);
vendaProdutoRouter.delete("/:id", eliminarVendaProduto.handle);

export { vendaProdutoRouter };
