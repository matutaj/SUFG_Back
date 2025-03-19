import { Request, Response } from "express";
import { ListarPermissaoPeloNomeCasoDeUso } from "./ListarPermissaoPeloNomeCasoDeUso";
import { listarPermissaoPeloNome } from "../../../../schema/permissoes";
class ListarPermissaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarPermissaoPeloNomeCasoDeUso = new ListarPermissaoPeloNomeCasoDeUso();
        const { nomePermissao } = req.params;
        if (!listarPermissaoPeloNome.validate({ nomePermissao })) return res.status(400).json({ message: "Dados inválidos" });
        const result = await listarPermissaoPeloNomeCasoDeUso.execute(nomePermissao);
        return res.status(201).json(result);
    }
}
export { ListarPermissaoPeloNomeController}