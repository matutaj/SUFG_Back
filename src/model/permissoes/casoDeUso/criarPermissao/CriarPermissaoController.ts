import { Request, Response } from "express";
import { CriarPermissaoCasoDeUso } from "./CriarPermissaoCasoDeUso";
import { criarPermissaoSchema } from "../../../../schema/permissoes";
import { AppError } from "../../../../errors/AppError";
class CriarPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarPermissaoCasoDeUso = new CriarPermissaoCasoDeUso();
        const { descricao, nome } = req.body;
        if (!await criarPermissaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await criarPermissaoCasoDeUso.execute({ descricao, nome });
        return res.status(201).json(result);
    }
}
export {CriarPermissaoController}