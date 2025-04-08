import { Request, Response } from "express";
import { DeleteEstoqueCasoDeUso } from "./DeleteEstoqueCasoDeUso";
import { deletarEstoqueSchema } from "../../../../schema/estoques";
import { AppError } from "../../../../errors/AppError";
class DeleteEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const eliminarEstoqueCasoDeUso = new DeleteEstoqueCasoDeUso();
    const { id } = req.params;
    if (!(await deletarEstoqueSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados");
    await eliminarEstoqueCasoDeUso.execute(id);
    return res.status(204).send();
  }
}

export { DeleteEstoqueController };
