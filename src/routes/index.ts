import { Router } from "express";
import { clientesRoutes } from "./cliente.routes";
const routes = Router();

routes.use("/Clientes", clientesRoutes);
export { routes };
