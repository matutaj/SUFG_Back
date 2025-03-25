import { Request, Response } from "express";
import { CriarPrateleiraCasoDeUso } from "./CriarPrateleiraCasoDeUso";
import { criarPrateleiraSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class CriarPrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new CriarPrateleiraCasoDeUso();
    const { descricaoPrateleira, nomePrateleira } = req.body;
    if (!criarPrateleiraSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await prateleiraCasoDeUso.execute({
      descricaoPrateleira,
      nomePrateleira,
    });
    return res.status(201).json(result);
  }
}

export { CriarPrateleiraController };
