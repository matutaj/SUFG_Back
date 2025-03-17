import { Request, Response } from "express";
import { ListarTodasVendasProdutosCasoDeUso } from "./ListarTodasVendasProdutosCasoDeUso";

class listarTodasVendasProdutosController {
    async handle(req: Request, res: Response) {
        const listarTodasVendasProdutosCasoDeUso = new ListarTodasVendasProdutosCasoDeUso();
        const result = await listarTodasVendasProdutosCasoDeUso.execute();
        res.status(201).json(result);
    }
}
export { listarTodasVendasProdutosController }