import { Request, Response } from "express";
import { ListarPermissaoPeloNomeCasoDeUso } from "./ListarPermissaoPeloNomeCasoDeUso";
import { listarPermissaoPeloNome } from "../../../../schema/permissoes";
import { AppError } from "../../../../errors/AppError";
class ListarPermissaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarPermissaoPeloNomeCasoDeUso = new ListarPermissaoPeloNomeCasoDeUso();
        const { nomePermissao } = req.params;
        if (!await listarPermissaoPeloNome.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await listarPermissaoPeloNomeCasoDeUso.execute(nomePermissao);
        return res.status(201).json(result);
    }
}
export { ListarPermissaoPeloNomeController}