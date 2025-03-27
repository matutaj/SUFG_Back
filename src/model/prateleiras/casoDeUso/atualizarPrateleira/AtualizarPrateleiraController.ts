import { Request, Response } from "express";
import { AtualizarPrateleiraCasoDeUso } from "./AtualizarPrateleiraCasoDeUso";
import { atualizarPrateleiraSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";

class AtualizarPrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { nomePrateleira, descricao } = req.body;
    if (!atualizarPrateleiraSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!atualizarPrateleiraSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const atualizarPrateleiraCasoDeUso = new AtualizarPrateleiraCasoDeUso();
    const result = await atualizarPrateleiraCasoDeUso.execute({
      id: String(id),
      nomePrateleira: String(nomePrateleira),
      descricao: String(descricao),
    });

    return res.status(200).json(result);
  }
}
export { AtualizarPrateleiraController };
