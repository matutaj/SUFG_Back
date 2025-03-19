import { Request, Response } from "express";
import { AtualizarProdutoCasoDeUso } from "./AtualizarProdutoCasoDeUso";

class AtualizarProdutoController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const produtoCasoDeUso = new AtualizarProdutoCasoDeUso();
        const produto = await produtoCasoDeUso.execute(req.body);
        return res.status(201).json(produto);
    }
}   

export { AtualizarProdutoController };