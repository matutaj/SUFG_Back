import { Request, Response } from "express";
import { ListarProdutoPeloNomeCasoDeUso } from "./ListarProdutoPeloNomeCasoDeUso";

class ListarProdutoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const { nomeProduto } = req.body;
        const listarProdutoPeloNomeCasoDeUso = new ListarProdutoPeloNomeCasoDeUso();
        const produto = await listarProdutoPeloNomeCasoDeUso.execute(nomeProduto);
        return res.status(201).json(produto);
    }
}