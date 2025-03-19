import { Request, Response } from "express";
import { ListarFornecedorPeloNomeCasoDeUso } from "./ListarFornecedorPeloNomeCasoDeUso";
import { listarFornecedorPeloNome } from "../../../../schema/fornecedores";

class ListarFornecedorPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFornecedorPeloNomeCasoDeUso = new ListarFornecedorPeloNomeCasoDeUso();
        const { nomeFornecedor } = req.params;
        if (!listarFornecedorPeloNome.isValid(req.params)) {
            throw new Error("Erro na validação dos campos");
        }
        const result = await listarFornecedorPeloNomeCasoDeUso.execute( nomeFornecedor );
        return res.status(201).json(result);
    }
}
export { ListarFornecedorPeloNomeController }