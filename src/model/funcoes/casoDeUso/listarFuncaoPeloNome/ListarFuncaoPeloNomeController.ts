import { Request, Response } from "express";
import { ListarFuncaoPeloNomeCasoDeUso } from "./ListarFuncaoPeloNomeCasoDeUso";

class ListarFuncaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFuncaoPeloNomeCasoDeUso = new ListarFuncaoPeloNomeCasoDeUso();
        const { nomeFuncao } = req.params;
        const result = await listarFuncaoPeloNomeCasoDeUso.execute(nomeFuncao);
        return res.status(201).json(result);
    }
}
export { ListarFuncaoPeloNomeController };