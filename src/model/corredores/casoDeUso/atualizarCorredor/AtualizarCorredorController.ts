import { Request, Response } from "express";
import { AtualizarCorredorCasoDeUso } from "./AtualizarCorredorCasoDeUso";
import { atualizarCorredorSchema } from "../../../../schema/corredores";
import { AppError } from "../../../../errors/AppError";
class AtualizarCorredorController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarCorredorCasoDeUso = new AtualizarCorredorCasoDeUso();
    const { id } = req.params;
    const { descricao, nomeCorredor } = req.body;
    if (!await atualizarCorredorSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarCorredorSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarCorredorCasoDeUso.execute({
      id,
      descricao,
      nomeCorredor,
    });
    return res.status(201).json(result);
  }
}
export { AtualizarCorredorController };
