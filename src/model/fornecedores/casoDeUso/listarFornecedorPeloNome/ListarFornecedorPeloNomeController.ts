import { Request, Response } from "express";
import { ListarFornecedorPeloNomeCasoDeUso } from "./ListarFornecedorPeloNomeCasoDeUso";

class ListarFornecedorPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarFornecedorPeloNomeCasoDeUso = new ListarFornecedorPeloNomeCasoDeUso();
        const { nomeFornecedor } = req.params;
        const result = await listarFornecedorPeloNomeCasoDeUso.execute( nomeFornecedor );
        return res.status(201).json(result);
    }
}
export { ListarFornecedorPeloNomeController }