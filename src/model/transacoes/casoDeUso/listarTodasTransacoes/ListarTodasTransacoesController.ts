import { Request, Response } from "express";
import { ListarTodasTransacoesCasoDeUso } from "./ListarTodasTransacoesCasoDeUso";

class ListarTodasTransacoesController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarTodasTransacoesCasoDeUso = new ListarTodasTransacoesCasoDeUso();
        const result = await listarTodasTransacoesCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasTransacoesController };