import { Request, Response } from "express";
import { ListarProdutoPeloNomeCasoDeUso } from "./ListarProdutoPeloNomeCasoDeUso";
import { listarProdutoPeloNome } from "../../../../schema/produtos";
import { AppError } from "../../../../errors/AppError";
class ListarProdutoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const { nomeProduto } = req.body;
        const listarProdutoPeloNomeCasoDeUso = new ListarProdutoPeloNomeCasoDeUso();
        if (!await listarProdutoPeloNome.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
        const produto = await listarProdutoPeloNomeCasoDeUso.execute(nomeProduto);
        return res.status(201).json(produto);
    }
}
export { ListarProdutoPeloNomeController };