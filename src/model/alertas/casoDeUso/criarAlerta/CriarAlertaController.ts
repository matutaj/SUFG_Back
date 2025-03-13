import { Request, Response } from "express";
import { CriarAlertaCasoDeUso } from "./CriarAlertaCasoDeUso";

class CriarAlertaController {
    async handle(req: Request, res: Response) {
        const AlertaCasoDeUso = new CriarAlertaCasoDeUso();
        const { descricaoAlerta, nomeAlerta } = req.body;
        const result = await AlertaCasoDeUso.execute({ descricaoAlerta, nomeAlerta, caixas: '', produtos: '' });
        return res.status(201).json(result);
    }
}