import { Request, Response } from "express";
import { CriarAlertaCasoDeUso } from "./CriarAlertaCasoDeUso";

class CriarAlertaController {
    async handle(req: Request, res: Response): Promise<any> {
        const AlertaCasoDeUso = new CriarAlertaCasoDeUso();
        const { descricaoAlerta, nomeAlerta, id_caixa, id_produto } = req.body;
        const result = await AlertaCasoDeUso.execute({ descricaoAlerta, nomeAlerta, id_caixa, id_produto });
        return res.status(201).json(result);
    }
}
export { CriarAlertaController }