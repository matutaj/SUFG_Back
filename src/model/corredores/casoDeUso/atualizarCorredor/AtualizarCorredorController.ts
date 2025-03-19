import { Request, Response } from "express";
import { AtualizarCorredorCasoDeUso } from "./AtualizarCorredorCasoDeUso";

class AtualizarCorredorController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarCorredorCasoDeUso = new AtualizarCorredorCasoDeUso();
        const { id, descricaoCorredor, nomeCorredor } = req.body;
        const result = await atualizarCorredorCasoDeUso.execute({
            id,
            descricaoCorredor,
            nomeCorredor,
        });
        return res.status(201).json(result);
    }
}
export { AtualizarCorredorController };