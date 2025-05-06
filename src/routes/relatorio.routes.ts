import { Router } from "express";
import { RelatorioControlador } from "../model/relatorio/casoDeUso/listarRelatorios/ListarRelatorioController";

const relatorioRouter = Router();
const relatorioControlador = new RelatorioControlador();
/* 
relatorioRouter.get("/vendas-periodo", relatorioControlador.handle);
relatorioRouter.get("/vendas-cliente", relatorioControlador.handle);
relatorioRouter.get("/produtos-mais-vendidos", relatorioControlador.handle);
relatorioRouter.get("/faturamento-periodo", relatorioControlador.handle);
relatorioRouter.get("/faturamento-caixa", relatorioControlador.handle);
relatorioRouter.get("/estoque-atual", relatorioControlador.handle);
relatorioRouter.get("/entradas-estoque", relatorioControlador.handle);
relatorioRouter.get("/transferencias", relatorioControlador.handle);
relatorioRouter.get("/produtos-abaixo-minimo", relatorioControlador.handle);
relatorioRouter.get("/atividade-caixa", relatorioControlador.handle);
relatorioRouter.get("/periodo-mais-vendido", relatorioControlador.handle);
relatorioRouter.get("/atividades-caixas", relatorioControlador.handle);
relatorioRouter.get("/tarefas", relatorioControlador.handle);
relatorioRouter.get("/relatorio-vendas", relatorioControlador.handle);
relatorioRouter.get("/relatorio-estoque", relatorioControlador.handle);
relatorioRouter.get("/relatorio-entradas-estoque", relatorioControlador.handle);
relatorioRouter.get("/relatorio-produtos", relatorioControlador.handle);
relatorioRouter.get(
  "/relatorio-produto-localizacao",
  relatorioControlador.handle
);
relatorioRouter.get("/atividades-do-dia", relatorioControlador.handle);
relatorioRouter.get("/caixas", relatorioControlador.handle); */

relatorioRouter.get("/:endpoint", relatorioControlador.handle);

export { relatorioRouter };
