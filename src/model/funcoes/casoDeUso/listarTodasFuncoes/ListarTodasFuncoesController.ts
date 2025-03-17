import { Request, Response } from "express";
import { ListarTodasFuncoesCasoDeUso } from "./ListarTodasFuncoesCasoDeUso";

class ListarTodasFuncoesController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarTodasFuncoesCasoDeUso = new ListarTodasFuncoesCasoDeUso();
        const result = await listarTodasFuncoesCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodasFuncoesController };