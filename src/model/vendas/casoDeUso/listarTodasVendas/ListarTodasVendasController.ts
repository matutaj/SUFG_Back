import { Request, Response } from "express";
import { ListarTodasVendasCasoDeUso } from "./ListarTodasVendasCasoDeUso";

class ListarTodasVendasController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarTodasVendasCasoDeUso = new ListarTodasVendasCasoDeUso();
        const result = await listarTodasVendasCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasVendasController };