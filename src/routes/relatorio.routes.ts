import { Router } from "express";
import { RelatorioControlador } from "../model/relatorio/casoDeUso/listarRelatorios/ListarRelatorioController";

const relatorioRouter = Router();
const relatorioControlador = new RelatorioControlador();

// Endpoints suportados para relatórios:
// - /atividades-caixas
// - /atividades-do-dia
// - /relatorio-entradas-estoque
// - /relatorio-estoque
// - /relatorio-produto-localizacao
// - /produtos-mais-vendidos
// - /transferencias
// - /faturamento-periodo
// - /relatorio-vendas
// - /vendas-cliente
relatorioRouter.get("/:endpoint", relatorioControlador.handle);

export { relatorioRouter };
