import { CriarEntradaEstoqueCasoDeUso } from "./CriarEntradaEstoqueCasoDeUso";
import { Request, Response } from "express";
import { criarEntradaSchema } from "../../../../schema/entradasEstoque";
import { AppError } from "../../../../errors/AppError";
class CriarEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarEntradaEstoqueCasoDeUso = new CriarEntradaEstoqueCasoDeUso();

    if (!(await criarEntradaSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const result = await criarEntradaEstoqueCasoDeUso.execute(req.body);
    console.log(result);
    return res.status(201).json(result);
  }
}
export { CriarEntradaEstoqueController };
