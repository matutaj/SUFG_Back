import { Request, Response } from "express";
import { ListarFuncionarioPeloNomeCasoDeUso } from "./ListarFuncionarioPeloNomeCasoDeUso";

class ListarFuncionarioPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFuncionarioPeloNomeCasoDeUso = new ListarFuncionarioPeloNomeCasoDeUso();
        const { nomeFuncionario } = req.params;
        const result = await listarFuncionarioPeloNomeCasoDeUso.execute(nomeFuncionario);
        return res.status(201).json(result);
    }
}

export { ListarFuncionarioPeloNomeController };