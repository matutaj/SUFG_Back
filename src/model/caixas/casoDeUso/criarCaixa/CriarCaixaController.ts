import { criarCaixaSchema } from "../../../../schema/caixas";
import { CriarCaixaCasoDeUso } from "./CriarCaixaCasoDeUso";
import { Request, Response } from "express";
class CriarCaixaController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarCaixaCasoDeUso = new CriarCaixaCasoDeUso();
        const { nomeCaixa, descricaoCaixa } = req.body;
        if (!criarCaixaSchema.isValid(req.body)) {
            throw new Error("Erro na validação dos campos");
        }
        const result = await criarCaixaCasoDeUso.execute({ nomeCaixa, descricaoCaixa });
        return res.status(201).json(result);
    }
}
export {CriarCaixaController}