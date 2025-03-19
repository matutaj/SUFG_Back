import { Request, Response } from "express";
import { AtualizarLocalizacaoCasoDeUso } from "./AtualizarLocalizacaoCasoDeUso";

class AtualizarLocalizacaoController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarLocalizacaoCasoDeUso = new AtualizarLocalizacaoCasoDeUso();
        const { id, descricaoLocalizacao, localProduto, nomeLocalizacao } = req.body;
        const result = await atualizarLocalizacaoCasoDeUso.execute({
            id,
            descricaoLocalizacao,
            localProduto,
            nomeLocalizacao,
        });
        return res.status(200).json(result);
    }
}
export { AtualizarLocalizacaoController }