import { ListarCorredorPeloNomeCasoDeUso } from "./ListarCorredorPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarCorredorPeloNome } from "../../../../schema/corredores";
class ListarCorredorPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarCorredorPeloNomeCasoDeUso = new ListarCorredorPeloNomeCasoDeUso();
        const { nomeCorredor } = req.params;
        if (!listarCorredorPeloNome.isValid(req.params)) throw new Error("Erro na Validação dos dados");
        const result = await listarCorredorPeloNomeCasoDeUso.execute(nomeCorredor);
        return res.status(201).json(result);
    }
}
export {ListarCorredorPeloNomeController}