import { Request, Response } from "express";
import { CriarVendaProdutoCasoDeUso } from "./CriarVendaProdutoCasoDeUso";  

class CriarVendaProdutoController {
    async handle(req: Request, res: Response) {
        const criarVendaProdutoCasoDeUso = new CriarVendaProdutoCasoDeUso();
        const { id_produto, id_venda, quantidadeVendida } = req.body;
        const result = await criarVendaProdutoCasoDeUso.execute({id_produto, id_venda, quantidadeVendida});
        return res.status(201).json(result);
    }
}
export { CriarVendaProdutoController };