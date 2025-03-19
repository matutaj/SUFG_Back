import { Request, Response } from "express";
import { ListarFuncaoPeloNomeCasoDeUso } from "./ListarFuncaoPeloNomeCasoDeUso";
import { listarFuncaoPeloNome } from "../../../../schema/funcoes";

class ListarFuncaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFuncaoPeloNomeCasoDeUso = new ListarFuncaoPeloNomeCasoDeUso();
        const { nomeFuncao } = req.params;
        if (!listarFuncaoPeloNome.validate({ nomeFuncao })) return res.status(400).json({ message: "Dados inválidos" });
        const result = await listarFuncaoPeloNomeCasoDeUso.execute(nomeFuncao);
        return res.status(201).json(result);
    }
}
export { ListarFuncaoPeloNomeController };