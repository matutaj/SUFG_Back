import { Request, Response } from "express";
import { ListarFuncaoPeloNomeCasoDeUso } from "./ListarFuncaoPeloNomeCasoDeUso";
import { listarFuncaoPeloNome } from "../../../../schema/funcoes";
import { AppError } from "../../../../errors/AppError";
class ListarFuncaoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFuncaoPeloNomeCasoDeUso = new ListarFuncaoPeloNomeCasoDeUso();
        const { nome } = req.params;
        console.log(nome)
        if (!await listarFuncaoPeloNome.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await listarFuncaoPeloNomeCasoDeUso.execute(nome);
        return res.status(201).json(result);
    }
}
export { ListarFuncaoPeloNomeController };