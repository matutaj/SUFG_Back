import { Request, Response } from "express";
import { ListarPermissaoPeloNomeCasoDeUso } from "./ListarPermissaoPeloNomeCasoDeUso";

class ListarPermissaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarPermissaoPeloNomeCasoDeUso = new ListarPermissaoPeloNomeCasoDeUso();
        const { nomePermissao } = req.params;
        const result = await listarPermissaoPeloNomeCasoDeUso.execute(nomePermissao);
        return res.status(201).json(result);
    }
}
export { ListarPermissaoPeloNomeController}