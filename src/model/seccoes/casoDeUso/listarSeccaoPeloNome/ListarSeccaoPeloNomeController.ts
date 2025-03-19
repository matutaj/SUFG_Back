import { ListarSeccaoPeloNomeCasoDeUso } from "./ListarSeccaoPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarSeccaoPeloNome } from "../../../../schema/seccoes";
class ListarSeccaoPeloNomeController{
    async handle(req: Request, res: Response): Promise<any> {
        const seccaoCasoDeUso = new ListarSeccaoPeloNomeCasoDeUso();
        const { nomeSeccao } = req.params;
        if (!listarSeccaoPeloNome.validate(req.params)) return res.status(400).json({});
        const result = await seccaoCasoDeUso.execute(nomeSeccao);
        return res.status(201).json(result);
    }
}
export {ListarSeccaoPeloNomeController}