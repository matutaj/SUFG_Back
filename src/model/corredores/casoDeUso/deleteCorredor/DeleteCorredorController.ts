import { Request, Response } from "express";
import { DeleteCorredorCasoDeUso } from "./DeleteCorredorCasoDeUso";
import { deletarCorredorSchema } from "../../../../schema/corredores";
import { AppError } from "../../../../errors/AppError";
class DeleteCorredorController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteCorredorCasoDeUso = new DeleteCorredorCasoDeUso();
    const { id } = req.params;
    if (!await deletarCorredorSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    await deleteCorredorCasoDeUso.execute(id);
    return res.status(201).json("deletado com sucesso!");
  }
}
export { DeleteCorredorController };
