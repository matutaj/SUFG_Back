import { Request, Response } from "express";
import { AtualizarProdutoCasoDeUso } from "./AtualizarProdutoCasoDeUso";
import { atualizarProdutoSchema } from "../../../../schema/produtos";
import { AppError } from "../../../../errors/AppError";
class AtualizarProdutoController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        if (!await atualizarProdutoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const produtoCasoDeUso = new AtualizarProdutoCasoDeUso();
        const produto = await produtoCasoDeUso.execute(req.body);
        return res.status(201).json(produto);
    }
}   

export { AtualizarProdutoController };