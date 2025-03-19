import { Request, Response } from "express";
import { AtualizarCaixaCasoDeUso } from "./AtualizarCaixaCasoDeUso";

class AtualizarCaixaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { nomeCaixa, descricaoCaixa } = req.body;

        const atualizarCaixaCasoDeUso = new AtualizarCaixaCasoDeUso();
        const caixa = await atualizarCaixaCasoDeUso.execute({
            id,
            nomeCaixa,
            descricaoCaixa,
        });

        return res.json(caixa);
    }
}
export { AtualizarCaixaController}