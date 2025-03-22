import { Request, Response } from "express";
import { AtualizarVendaProdutoCasoDeUso } from "./AtualizarVendaProdutoCasoDeUso";

class AtualizarVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarVendaProdutoCasoDeUso = new AtualizarVendaProdutoCasoDeUso();
    const { id, id_venda, id_produto, quantidadeVendida } = req.body;
    const result = await atualizarVendaProdutoCasoDeUso.execute({
      id,
      id_venda,
      id_produto,
      quantidadeVendida,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarVendaProdutoController };