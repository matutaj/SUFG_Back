import { Request, Response } from "express";
import { ListarTodosAlertasCasoDeUso } from "./ListarTodosAlertasCasoDeUso";

class ListarTodosAlertasController {
    async handle(req: Request, res: Response) {
        const listarTodosAlertasCasoDeUso = new ListarTodosAlertasCasoDeUso();
        const result = await listarTodosAlertasCasoDeUso.execute();
        return res.status(200).json(result);
    }
}
export { ListarTodosAlertasController };