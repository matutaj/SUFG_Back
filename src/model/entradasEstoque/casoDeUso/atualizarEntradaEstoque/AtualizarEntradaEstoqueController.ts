import { Request, Response } from "express";
import { AtualizarEntradaEstoqueCasoDeUso } from "./AtualizarEntradaEstoqueCasoDeUso";
import { atualizarEntradaSchema } from "../../../../schema/entradasEstoque";
import { AppError } from "../../../../errors/AppError";
class AtualizarEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarEntradaEstoqueCasoDeUso =
      new AtualizarEntradaEstoqueCasoDeUso();
    const { id } = req.params;
    req.body.id = id;
    if (!(await atualizarEntradaSchema.isValid(req.body)))
      throw new AppError("Dados inválidos");
    if (!(await atualizarEntradaSchema.isValid(req.params)))
      throw new AppError("Dados inválidos");
    const result = await atualizarEntradaEstoqueCasoDeUso.execute(req.body);
    return res.status(200).json(result);
  }
}

export { AtualizarEntradaEstoqueController };
