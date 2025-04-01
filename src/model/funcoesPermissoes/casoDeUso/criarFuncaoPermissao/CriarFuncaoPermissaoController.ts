import { Request, Response } from "express";
import { CriarFuncaoPermissaoCasoDeUso } from "./CriarFuncaoPermissaoCasoDeUso";
import { criarFuncaoPermissaoSchema } from "../../../../schema/funcoesPermissoes";
import { AppError } from "../../../../errors/AppError";
class CriarFuncaoPermissaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarFuncaoPermissaoCasoDeUso = new CriarFuncaoPermissaoCasoDeUso();
        const { id_funcao, id_permissao } = req.body;
        if (!await criarFuncaoPermissaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const result = await criarFuncaoPermissaoCasoDeUso.execute({ id_funcao, id_permissao });
        return res.status(201).json(result);
    }
}
export { CriarFuncaoPermissaoController}