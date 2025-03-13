import { CriarCaixaCasoDeUso } from "./CriarCaixaCasoDeUso";
import { Request, Response } from "express";
class CriarCaixaController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarCaixaCasoDeUso = new CriarCaixaCasoDeUso();
        const { nomeCaixa, descricaoCaixa } = req.body;
        const result = await criarCaixaCasoDeUso.execute({ nomeCaixa, descricaoCaixa });
        return res.status(201).json(result);
    }
}
export {CriarCaixaController}