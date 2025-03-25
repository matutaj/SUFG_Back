import { Request, Response } from "express";
import { CriarVendaProdutoCasoDeUso } from "./CriarVendaProdutoCasoDeUso";
import { criarVendaProdutoSchema } from "../../../../schema/vendasProdutos";
import { AppError } from "../../../../errors/AppError";

class CriarVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarVendaProdutoCasoDeUso = new CriarVendaProdutoCasoDeUso();
    const { id_produto, id_venda, quantidadeVendida } = req.body;
    if (!criarVendaProdutoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await criarVendaProdutoCasoDeUso.execute({
      id_produto,
      id_venda,
      quantidadeVendida,
    });
    return res.status(201).json(result);
  }
}
export { CriarVendaProdutoController };
