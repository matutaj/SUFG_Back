import { Request, Response } from "express";
import { AtualizarEntradaEstoqueCasoDeUso } from "./AtualizarEntradaEstoqueCasoDeUso";

class AtualizarEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarEntradaEstoqueCasoDeUso = new AtualizarEntradaEstoqueCasoDeUso();
    const {
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
    } = req.body;
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