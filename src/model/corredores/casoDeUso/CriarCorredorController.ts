import { CriarCorredorCasoDeUso } from "./CriarCorredorCasoDeUso";
import { Request, Response } from "express";
class CriarCorredorController {
    async handle(req: Request, res: Response): Promise<any> {
        const corredorCasoDeUso = new CriarCorredorCasoDeUso();
        const { descricaoCorredor, nomeCorredor } = req.body;
        const result = corredorCasoDeUso.execute({ descricaoCorredor, nomeCorredor });
        return res.status(201).json(result);
    }
}
export { CriarCorredorController };