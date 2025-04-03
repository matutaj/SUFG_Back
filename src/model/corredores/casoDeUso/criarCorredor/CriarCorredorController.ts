import { AppError } from "../../../../errors/AppError";
import { criarCorredorSchema } from "../../../../schema/corredores";
import { CriarCorredorCasoDeUso } from "./CriarCorredorCasoDeUso";
import { Request, Response } from "express";
class CriarCorredorController {
  async handle(req: Request, res: Response): Promise<any> {
    const corredorCasoDeUso = new CriarCorredorCasoDeUso();
    const { descricao, nomeCorredor } = req.body;
    if (!(await criarCorredorSchema.isValid(req.body))) {
      throw new AppError("Erro na validação dos campos");
    }
    const result = await corredorCasoDeUso.execute({
      descricao,
      nomeCorredor,
    });
    return res.status(201).json(result);
  }
}
export { CriarCorredorController };
