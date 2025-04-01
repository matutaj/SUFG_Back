import { Request, Response } from "express";
import { AtualizarVendaProdutoCasoDeUso } from "./AtualizarVendaProdutoCasoDeUso";
import { atualizarVendaProdutoSchema } from "../../../../schema/vendasProdutos";
import { AppError } from "../../../../errors/AppError";
class AtualizarVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarVendaProdutoCasoDeUso = new AtualizarVendaProdutoCasoDeUso();
    const { id } = req.params;
    const { id_venda, id_produto, quantidadeVendida } = req.body;
    if (!await atualizarVendaProdutoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    if (!await atualizarVendaProdutoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
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