import { Request, Response } from "express";
import { AtualizarFornecedorCasoDeUso } from "./AtualizarFornecedorCasoDeUso";
import { atualizarFornecedorSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";

class AtualizarFornecedorController {
    async handle(req: Request, res: Response): Promise<any> {
        const atualizarFornecedorCasoDeUso = new AtualizarFornecedorCasoDeUso();
        const { nif, nomeFornecedor, moradaFornecedor, telefoneFornecedor, emailFornecedor } = req.body;
        const { id } = req.params;
        if (!await atualizarFornecedorSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        if (!await atualizarFornecedorSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
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