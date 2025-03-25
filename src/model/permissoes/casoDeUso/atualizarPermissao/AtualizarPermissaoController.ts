import { Request, Response } from "express";
import { AtualizarPermissaoCasoDeUso } from "./AtualizarPermissaoCasoDeUso";
import { atualizarPermissaoSchema } from "../../../../schema/permissoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarPermissaoCasoDeUso = new AtualizarPermissaoCasoDeUso();
        const { id } = req.params;
        const { descricao, nome } = req.body;
        if (!atualizarPermissaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        if (!atualizarPermissaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await atualizarPermissaoCasoDeUso.execute({ id, descricao, nome });
        return res.status(200).json(result);
    }
}
export { AtualizarPermissaoController };