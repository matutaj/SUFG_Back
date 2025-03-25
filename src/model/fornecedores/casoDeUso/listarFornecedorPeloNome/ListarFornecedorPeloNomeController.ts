import { Request, Response } from "express";
import { ListarFornecedorPeloNomeCasoDeUso } from "./ListarFornecedorPeloNomeCasoDeUso";
import { listarFornecedorPeloNome } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class ListarFornecedorPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFornecedorPeloNomeCasoDeUso = new ListarFornecedorPeloNomeCasoDeUso();
        const { nomeFornecedor } = req.params;
        if (!listarFornecedorPeloNome.isValid(req.params)) {
            throw new AppError("Erro na validação dos campos");
        }
        const result = await listarFornecedorPeloNomeCasoDeUso.execute( nomeFornecedor );
        return res.status(201).json(result);
    }
}
export { ListarFornecedorPeloNomeController }