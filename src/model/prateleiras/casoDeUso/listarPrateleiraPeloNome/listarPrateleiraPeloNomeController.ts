import { ListarPrateleiraPeloNomeCasoDeUso } from "./listarPrateleiraPeloNomeCasoDeUso";
import { Request, Response } from "express";
class ListarPrateleiraPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const prateleiraCasoDeUso = new ListarPrateleiraPeloNomeCasoDeUso();
        const { nomePrateleira } = req.body;
        const result = await ListarPrateleiraPeloNomeCasoDeUso.execute(nomePrateleira);   
        return res.status(200).json(result);
    }
}
export { ListarPrateleiraPeloNomeController };