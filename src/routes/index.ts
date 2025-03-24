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
import { funcionariorCaixaRouter } from "./funcionarioCaixa.routes";
import { localizacaoRouter } from "./localizacao.routes";
import { permissaoRouter } from "./permissao.routes";
import { produtoLocalizacaoRouter } from "./produtoLocalizacao.routes";
import { vendaProdutoRouter } from "./vendaProdutos.routes";
import { funcaoPermissaoRoutes } from "./funcaoPermissao.routes";
import { entradaEstoqueRoutes } from "./entradaEstoque.routes";
import { funcionarioFuncaoRoutes } from "./funcionarioFuncao.routes";
import { funcionarioPermissaoRoutes } from "./funcionarioPermissao.routes";

const routes = Router();

routes.use("/entradaEstoque", entradaEstoqueRoutes);
routes.use("/funcaoPermissao", funcaoPermissaoRoutes);
routes.use("/funcionarioFuncao", funcionarioFuncaoRoutes);
routes.use("/funcionarioPermissao", funcionarioPermissaoRoutes);
routes.use("/produto", produtoRouter);
routes.use("/funcao", funcaoRouter);
routes.use("/transferencia", transferenciaRouter);
routes.use("/venda", vendaRouter);
routes.use("/clientes", clientesRouter);
routes.use("/corredores", corredorRouter);
routes.use("/categoriaProduto", categoriaProdutoRouter);
routes.use("/fornecedores", fornecedorRouter);
routes.use("/prateleira", prateleiraRouter);
routes.use("/seccao", seccaoRouter);
routes.use("/caixa", caixaRouter);
routes.use("/funcionario", funcionarioRouter);
routes.use("/funcionarioCaixa", funcionariorCaixaRouter);
routes.use("/localizacao", localizacaoRouter);
routes.use("/permissao", permissaoRouter);
routes.use("/produtoLocalizacao", produtoLocalizacaoRouter);
routes.use("/vendaProduto", vendaProdutoRouter);

export { routes };
