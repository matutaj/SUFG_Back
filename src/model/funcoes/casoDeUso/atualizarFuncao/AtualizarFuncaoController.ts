import { Request, Response } from "express";
import { AtualizarFuncaoCasoDeUso } from "./AtualizarFuncaoCasoDeUso";
import { atualizarFuncaoSchema } from "../../../../schema/funcoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFuncaoCasoDeUso = new AtualizarFuncaoCasoDeUso();
        const { id } = req.params;
        const { descricao, nome } = req.body;
        if (!atualizarFuncaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        if (!atualizarFuncaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await atualizarFuncaoCasoDeUso.execute({ id, descricao, nome });
        return res.status(201).json(result);
    }
}

export { AtualizarFuncaoController };