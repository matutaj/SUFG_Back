import { Request, Response } from "express";
import { ListarTodosFornecedoresCasoDeUso } from "./ListarTodosFornecedoresCasoDeUso";

class ListarTodosFornecedoresController {
    async handle(req: Request, res: Response) {
        const listarTodosFornecedoresCasoDeUso = new ListarTodosFornecedoresCasoDeUso();
        const result = await listarTodosFornecedoresCasoDeUso.execute();
        return res.status(201).json(result);
    }
}

export { ListarTodosFornecedoresController };