import { Request, Response } from "express";
import { AtualizarEntradaEstoqueCasoDeUso } from "./AtualizarEntradaEstoqueCasoDeUso";
import { atualizarEntradaSchema } from "../../../../schema/entradasEstoque";
import { AppError } from "../../../../errors/AppError";
class AtualizarEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarEntradaEstoqueCasoDeUso = new AtualizarEntradaEstoqueCasoDeUso();
    const { id } = req.params;
    const {
      id_fornecedor,
      id_produto,
      id_funcionario,
      produtoRecebido,
      quantidadeRecebida,
      dataEntrada,
      custoUnitario,
      lote,
      dataValidadeLote,
    } = req.body;
    if (!atualizarEntradaSchema.isValid(req.body)) throw new AppError("Dados inválidos");
    if (!atualizarEntradaSchema.isValid(req.params)) throw new AppError("Dados inválidos");
    const result = await atualizarEntradaEstoqueCasoDeUso.execute({
      id,
      id_fornecedor,
      id_produto,
      id_funcionario,
      produtoRecebido,
      quantidadeRecebida,
      dataEntrada,
      custoUnitario,
      lote,
      dataValidadeLote,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarEntradaEstoqueController };