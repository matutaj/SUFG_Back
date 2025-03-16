import { Request, Response } from "express";
import { ListarTodasPermissoesCasoDeUso } from "./ListarTodasPermissoesCasoDeUso";

class ListarTodasPermissoesController {
    async handle(req: Request, res: Response) {
        const listarTodasPermissoesCasoDeUso = new ListarTodasPermissoesCasoDeUso();
        const result = await listarTodasPermissoesCasoDeUso.execute();
        return res.status(200).json(result);
    }
}

export { ListarTodasPermissoesController };