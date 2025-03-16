import { ListarSeccaoPeloNomeCasoDeUso } from "./ListarSeccaoPeloNomeCasoDeUso";
import { Request, Response } from "express";
class ListarSeccaoPeloNomeController{
    async handle(req: Request, res: Response): Promise<any> {
        const seccaoCasoDeUso = new ListarSeccaoPeloNomeCasoDeUso();
        const { nomeSeccao } = req.params;
        const result = await seccaoCasoDeUso.execute(nomeSeccao);
        return res.status(201).json(result);
    }
}
export {ListarSeccaoPeloNomeController}