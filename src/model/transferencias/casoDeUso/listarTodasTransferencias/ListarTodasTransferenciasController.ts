import { Request, Response } from "express";
import { ListarTodasTransferenciasCasoDeUso } from "./ListarTodasTransferenciasCasoDeUso";

class ListarTodasTransferenciasController {
    async handle(req: Request, res: Response) {
        const listarTodasTransferenciasCasoDeUso = new ListarTodasTransferenciasCasoDeUso();
        const result = await listarTodasTransferenciasCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasTransferenciasController };