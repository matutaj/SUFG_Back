import { ListarSeccaoPeloNomeCasoDeUso } from "./ListarSeccaoPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarSeccaoPeloNome } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class ListarSeccaoPeloNomeController{
    async handle(req: Request, res: Response): Promise<any> {
        const seccaoCasoDeUso = new ListarSeccaoPeloNomeCasoDeUso();
        const { nomeSeccao } = req.params;
        if (!listarSeccaoPeloNome.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await seccaoCasoDeUso.execute(nomeSeccao);
        return res.status(201).json(result);
    }
}
export {ListarSeccaoPeloNomeController}