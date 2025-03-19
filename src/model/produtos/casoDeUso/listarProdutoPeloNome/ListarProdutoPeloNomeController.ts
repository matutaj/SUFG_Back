import { Request, Response } from "express";
import { ListarProdutoPeloNomeCasoDeUso } from "./ListarProdutoPeloNomeCasoDeUso";
import { listarProdutoPeloNome } from "../../../../schema/produtos";
class ListarProdutoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const { nomeProduto } = req.body;
        const listarProdutoPeloNomeCasoDeUso = new ListarProdutoPeloNomeCasoDeUso();
        if (!listarProdutoPeloNome.validate(req.body)) return res.status(400).json({ message: "Dados inválidos" });
        const produto = await listarProdutoPeloNomeCasoDeUso.execute(nomeProduto);
        return res.status(201).json(produto);
    }
}
export { ListarProdutoPeloNomeController };