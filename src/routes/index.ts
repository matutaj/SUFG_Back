import { Router } from "express";
import { clientesRoutes } from "./cliente.routes";
import { corredorRoutes } from "./corredor.routes";
import { categoriaProdutoRoutes } from "./categoriaProduto.routes";
const routes = Router();

routes.use("/Clientes", clientesRoutes);
routes.use("/Corredores", corredorRoutes);
routes.use("/CategoriaProduto", categoriaProdutoRoutes);

export { routes };
