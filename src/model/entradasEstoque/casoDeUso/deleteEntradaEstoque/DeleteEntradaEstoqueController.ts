import { Request, Response } from "express";
import { DeleteEntradaEstoqueCasoDeUso } from "./DeleteEntradaEstoqueCasoDeUso";
import { deletarEntradaSchema } from "../../../../schema/entradasEstoque";
import { AppError } from "../../../../errors/AppError";
class DeleteEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteEntradaEstoqueCasoDeUso = new DeleteEntradaEstoqueCasoDeUso();
    const { id } = req.params;
    if (!await deletarEntradaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteEntradaEstoqueCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteEntradaEstoqueController };