import { Router } from "express";
import { ListarVendasPorPeriodoController } from "../model/relatorio/casoDeUso/ListarVendasPorPeriodo/ListarVendasPorPeriodoController";
import { ListarVendasPorClienteController } from "../model/relatorio/casoDeUso/ListarVendasPorCliente/ListarVendasPorClienteController";
import { ListarProdutosMaisVendidosController } from "../model/relatorio/casoDeUso/ListarProdutosMaisVendidos/ListarProdutosMaisVendidosController";
import { ListarFaturamentoPorPeriodoController } from "../model/relatorio/casoDeUso/ListarFaturamentoPorPeriodo/ListarFaturamentoPorPeriodoController";
import { ListarQuantidadeFaturadaPorCaixaController } from "../model/relatorio/casoDeUso/ListarQuantidadeFaturadaPorCaixa/ListarQuantidadeFaturadaPorCaixaController";
import { ListarEstoqueAtualController } from "../model/relatorio/casoDeUso/ListarEstoqueAtual/ListarEstoqueAtualController";
import { ListarEntradasEstoquePorPeriodoController } from "../model/relatorio/casoDeUso/ListarEntradasEstoquePorPeriodo/ListarEntradasEstoquePorPeriodoController";
import { ListarTransferenciasPorPeriodoController } from "../model/relatorio/casoDeUso/ListarTransferenciasPorPeriodo/ListarTransferenciasPorPeriodoController";
import { ListarProdutosAbaixoMinimoController } from "../model/relatorio/casoDeUso/ListarProdutosAbaixoMinimo/ListarProdutosAbaixoMinimoController";
import { ListarAtividadeFuncionariosCaixaController } from "../model/relatorio/casoDeUso/ListarAtividadeFuncionariosCaixa/ListarAtividadeFuncionariosCaixaController";
import { ListarPeriodoMaisVendidoPorProdutoController } from "../model/relatorio/casoDeUso/ListarPeriodoMaisVendidoPorProduto/ListarPeriodoMaisVendidoPorProdutoController";

const relatorioRouter = Router();

const listarVendasPorPeriodo = new ListarVendasPorPeriodoController();
const listarVendasPorCliente = new ListarVendasPorClienteController();
const listarProdutosMaisVendidos = new ListarProdutosMaisVendidosController();
const listarFaturamentoPorPeriodo = new ListarFaturamentoPorPeriodoController();
const listarQuantidadeFaturadaPorCaixa =
  new ListarQuantidadeFaturadaPorCaixaController();
const listarEstoqueAtual = new ListarEstoqueAtualController();
const listarEntradasEstoquePorPeriodo =
  new ListarEntradasEstoquePorPeriodoController();
const listarTransferenciasPorPeriodo =
  new ListarTransferenciasPorPeriodoController();
const listarProdutosAbaixoMinimo = new ListarProdutosAbaixoMinimoController();
const listarAtividadeFuncionariosCaixa =
  new ListarAtividadeFuncionariosCaixaController();
const listarPeriodoMaisVendidoPorProduto =
  new ListarPeriodoMaisVendidoPorProdutoController();


relatorioRouter.get("/vendas-periodo", listarVendasPorPeriodo.handle);
relatorioRouter.get(
  "/vendas-cliente/:idCliente",
  listarVendasPorCliente.handle
);
relatorioRouter.get(
  "/produtos-mais-vendidos",
  listarProdutosMaisVendidos.handle
);
relatorioRouter.get("/faturamento-periodo", listarFaturamentoPorPeriodo.handle);
relatorioRouter.get(
  "/faturamento-caixa",
  listarQuantidadeFaturadaPorCaixa.handle
);
relatorioRouter.get("/estoque-atual", listarEstoqueAtual.handle);
relatorioRouter.get(
  "/entradas-estoque",
  listarEntradasEstoquePorPeriodo.handle
);
relatorioRouter.get("/transferencias", listarTransferenciasPorPeriodo.handle);
relatorioRouter.get(
  "/produtos-abaixo-minimo",
  listarProdutosAbaixoMinimo.handle
);
relatorioRouter.get(
  "/atividade-caixa",
  listarAtividadeFuncionariosCaixa.handle
);
relatorioRouter.get(
  "/periodo-mais-vendido/:idProduto",
  listarPeriodoMaisVendidoPorProduto.handle
);

export { relatorioRouter };
