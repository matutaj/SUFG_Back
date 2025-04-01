import { Request, Response } from "express";
import { ListarFuncionarioPeloNomeCasoDeUso } from "./ListarFuncionarioPeloNomeCasoDeUso";
import { listarFuncionarioPeloNome } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class ListarFuncionarioPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFuncionarioPeloNomeCasoDeUso = new ListarFuncionarioPeloNomeCasoDeUso();
        const { nomeFuncionario } = req.params;
        if (!await listarFuncionarioPeloNome.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await listarFuncionarioPeloNomeCasoDeUso.execute(nomeFuncionario);
        return res.status(201).json(result);
    }
}

export { ListarFuncionarioPeloNomeController };