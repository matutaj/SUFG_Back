import { Request, Response } from "express";
import { DeleteFuncionarioCasoDeUso } from "./DeleteFuncionarioCasoDeUso";

class DeleteFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteFuncionarioCasoDeUso = new DeleteFuncionarioCasoDeUso();
        const { id } = req.params;
        const result = await deleteFuncionarioCasoDeUso.execute(id);
        return res.status(201).json(result);
    }
}
export { DeleteFuncionarioController }