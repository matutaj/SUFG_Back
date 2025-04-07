import { Request, Response } from "express";
import { AtualizarEstoqueCasoDeUso } from "./AtualizarEstoqueCasoDeUso";
import { atualizarEstoqueSchema } from "../../../../schema/estoques";
import { AppError } from "../../../../errors/AppError";

class AtualizarEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarEstoqueCasoDeUso = new AtualizarEstoqueCasoDeUso();
    const { id_produto, quantidadeAtual, lote, dataValidadeLote } = req.body;
    const { id } = req.params;
    if (!(await atualizarEstoqueSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados");
    if (!(await atualizarEstoqueSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarEstoqueCasoDeUso.execute({
      id,
      id_produto,
      quantidadeAtual,
      lote,
      dataValidadeLote,
    });

    return res.status(200).json(result);
  }
}

export { AtualizarEstoqueController };
