import { CriarEntradaEstoqueCasoDeUso } from "./CriarEntradaEstoqueCasoDeUso";
import { Request, Response } from "express";
import { criarEntradaSchema } from "../../../../schema/entradasEstoque";
import { AppError } from "../../../../errors/AppError";
class CriarEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarEntradaEstoqueCasoDeUso = new CriarEntradaEstoqueCasoDeUso();
    const {
      id_fornecedor,
      id_produto,
      id_funcionario,
      adicionado,
      quantidadeRecebida,
      dataEntrada,
      custoUnitario,
      lote,
      dataValidadeLote,
    } = req.body;
    if (!(await criarEntradaSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const result = await criarEntradaEstoqueCasoDeUso.execute({
      id_fornecedor,
      id_produto,
      adicionado,
      id_funcionario,
      quantidadeRecebida,
      dataEntrada,
      custoUnitario,
      lote,
      dataValidadeLote,
    });
    return res.status(201).json(result);
  }
}
export { CriarEntradaEstoqueController };
