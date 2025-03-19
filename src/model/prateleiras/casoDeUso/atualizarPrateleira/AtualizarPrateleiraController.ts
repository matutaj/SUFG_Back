import { Request, Response } from "express";
import { AtualizarPrateleiraCasoDeUso } from "./AtualizarPrateleiraCasoDeUso";
import { string } from "yup";

class AtualizarPrateleiraController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { nomePrateleira, descricaoPrateleira } = req.body;

        const atualizarPrateleiraCasoDeUso = new AtualizarPrateleiraCasoDeUso();
        const result = await atualizarPrateleiraCasoDeUso.execute({
            id: String(id),
            nomePrateleira: String(nomePrateleira),
            descricaoPrateleira: String(descricaoPrateleira),
        });

        return res.status(200).json(result);
    }
}
export { AtualizarPrateleiraController };   