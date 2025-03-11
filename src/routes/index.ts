import { Router } from "express";
import { clientesRouter } from "./cliente.routes";
import { corredorRouter } from "./corredor.routes";
import { categoriaProdutoRouter } from "./categoriaProduto.routes";
import { fornecedorRouter } from "./fornecedor.routes";
import { prateleiraRouter } from "./prateleira.routes";
import { seccaoRouter } from "./seccao.routes";
const routes = Router();

routes.use("/Clientes", clientesRouter);
routes.use("/Corredores", corredorRouter);
routes.use("/CategoriaProduto", categoriaProdutoRouter);
routes.use("/Fornecedores", fornecedorRouter);
routes.use("/Prateleira", prateleiraRouter);
routes.use("/Seccao", seccaoRouter);

export { routes };
