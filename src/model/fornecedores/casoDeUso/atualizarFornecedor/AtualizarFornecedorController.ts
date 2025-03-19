import { Request, Response } from "express";
import { AtualizarFornecedorCasoDeUso } from "./AtualizarFornecedorCasoDeUso";

class AtualizarFornecedorController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFornecedorCasoDeUso = new AtualizarFornecedorCasoDeUso();
        const { id, nif, nomeFornecedor, moradaFornecedor, telefoneFornecedor, emailFornecedor } = req.body;
        const result = await atualizarFornecedorCasoDeUso.execute({
            id,
            nif,
            nomeFornecedor,
            moradaFornecedor,
            telefoneFornecedor,
            emailFornecedor,
        });
        return res.status(201).json(result);
    }
}
export { AtualizarFornecedorController };