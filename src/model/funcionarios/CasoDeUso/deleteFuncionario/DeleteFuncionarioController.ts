import { Request, Response } from "express";
import { DeleteFuncionarioCasoDeUso } from "./DeleteFuncionarioCasoDeUso";
import { deletarFuncionarioSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncionarioController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteFuncionarioCasoDeUso = new DeleteFuncionarioCasoDeUso();
        const { id } = req.params;
        if (!await deletarFuncionarioSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await deleteFuncionarioCasoDeUso.execute(id);
        return res.status(201).json(result);
    }
}
export { DeleteFuncionarioController }