import { CriarFuncaoCasoDeUso } from "./CriarFuncaoCasoDeUso";
import { Request, Response } from "express";
import { criarFuncaoSchema } from "../../../../schema/funcoes";
import { AppError } from "../../../../errors/AppError";
class CriarFuncaoController{
    async handle(req: Request, res: Response): Promise<any> {
        const funcaoCasoDeUso = new CriarFuncaoCasoDeUso();
        const { nome, descricao } = req.body;
        if (!criarFuncaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await funcaoCasoDeUso.execute({ nome, descricao });
        return res.status(201).json(result);
    }
}
export {CriarFuncaoController}