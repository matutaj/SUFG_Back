import { Request, Response } from "express";
import { CriarPrateleiraCasoDeUso } from "./CriarPrateleiraCasoDeUso";

class CriarPrateleiraController {
    async handle(req: Request, res: Response): Promise<any> {
        const prateleiraCasoDeUso = new CriarPrateleiraCasoDeUso();
        const { descricaoPrateleira, nomePrateleira } = req.body;
        const result = await prateleiraCasoDeUso.execute({ descricaoPrateleira, nomePrateleira });
        return res.status(201).json(result);
    }
}

export { CriarPrateleiraController }