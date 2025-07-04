import { Router } from "express";
import { clientesRouter } from "./cliente.routes";
import { corredorRouter } from "./corredor.routes";
import { categoriaProdutoRouter } from "./categoriaProduto.routes";
import { fornecedorRouter } from "./fornecedor.routes";
import { prateleiraRouter } from "./prateleira.routes";
import { seccaoRouter } from "./seccao.routes";
import { vendaRouter } from "./venda.routes";
import { transferenciaRouter } from "./transferencia.routes";
import { funcaoRouter } from "./funcao.routes";
import { produtoRouter } from "./produto.routes";
import { caixaRouter } from "./caixa.routes";
import { funcionarioRouter } from "./funcionario.routes";
import { funcionarioCaixaRouter } from "./funcionarioCaixa.routes";
import { localizacaoRouter } from "./localizacao.routes";
import { permissaoRouter } from "./permissao.routes";
import { produtoLocalizacaoRouter } from "./produtoLocalizacao.routes";
import { vendaProdutoRouter } from "./vendaProdutos.routes";
import { funcaoPermissaoRoutes } from "./funcaoPermissao.routes";
import { entradaEstoqueRoutes } from "./entradaEstoque.routes";
import { alertaRoutes } from "./alerta.routes";
import { loginRouter } from "./login.routes";
import { estoqueRouter } from "./estoque.route";
import { tarefaRouter } from "./tarefa.routes";
import { funcionarioTarefaRouter } from "./funcionarioTarefa.routes";
import { relatorioRouter } from "./relatorio.routes";

import fs from "fs";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = yaml.load(
  fs.readFileSync("./swagger.yaml", "utf8")
) as Record<string, any>;

const routes = Router();
routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use("/estoque", estoqueRouter);
routes.use("/tarefa", tarefaRouter);
routes.use("/funcionarioTarefa", funcionarioTarefaRouter);
routes.use("/alerta", alertaRoutes);
routes.use("/entradaEstoque", entradaEstoqueRoutes);
routes.use("/funcaoPermissao", funcaoPermissaoRoutes);
routes.use("/produto", produtoRouter);
routes.use("/funcao", funcaoRouter);
routes.use("/login", loginRouter);
routes.use("/transferencia", transferenciaRouter);
routes.use("/venda", vendaRouter);
routes.use("/relatorio", relatorioRouter);
routes.use("/cliente", clientesRouter);
routes.use("/corredor", corredorRouter);
routes.use("/categoriaProduto", categoriaProdutoRouter);
routes.use("/fornecedor", fornecedorRouter);
routes.use("/prateleira", prateleiraRouter);
routes.use("/seccao", seccaoRouter);
routes.use("/caixa", caixaRouter);
routes.use("/funcionario", funcionarioRouter);
routes.use("/funcionarioCaixa", funcionarioCaixaRouter);
routes.use("/localizacao", localizacaoRouter);
routes.use("/permissao", permissaoRouter);
routes.use("/produtoLocalizacao", produtoLocalizacaoRouter);
routes.use("/vendaProduto", vendaProdutoRouter);

export { routes };
