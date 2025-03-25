import { Request, Response } from "express";
import { AtualizarLocalizacaoCasoDeUso } from "./AtualizarLocalizacaoCasoDeUso";
import { atualizarLocalizacaoSchema } from "../../../../schema/localizacao";
import { AppError } from "../../../../errors/AppError";
class AtualizarLocalizacaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarLocalizacaoCasoDeUso = new AtualizarLocalizacaoCasoDeUso();
        const { id } = req.params;
        const { descricao, localProduto, nomeLocalizacao } = req.body;
        if (!atualizarLocalizacaoSchema.isValid(req.params))
            throw new AppError("Erro na Validação dos dados");
        if (!atualizarLocalizacaoSchema.isValid(req.body))
            throw new AppError("Erro na Validação dos dados");
        const result = await atualizarLocalizacaoCasoDeUso.execute({
            id,
            descricao,
            localProduto,
            nomeLocalizacao,
        });
        return res.status(200).json(result);
    }
}
export { AtualizarLocalizacaoController }