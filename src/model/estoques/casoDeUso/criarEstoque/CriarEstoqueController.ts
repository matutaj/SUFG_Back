import { Request, Response } from "express";
import { CriarEstoqueCasoDeUso } from "./CriarEstoqueCasoDeUso";
import { criarEstoqueSchema } from "../../../../schema/estoques";
import { AppError } from "../../../../errors/AppError";
class CriarEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarEstoqueCasoDeUso = new CriarEstoqueCasoDeUso();
    if (!(await criarEstoqueSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const result = await criarEstoqueCasoDeUso.execute(req.body);
    return res.status(201).json(result);
  }
}

export { CriarEstoqueController };
