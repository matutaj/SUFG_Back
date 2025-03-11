import { Router } from "express";
import { clientesRoutes } from "./cliente.routes";
import { corredorRoutes } from "./corredor.routes";
const routes = Router();

routes.use("/Clientes", clientesRoutes);
routes.use("/Corredores", corredorRoutes);

export { routes };
