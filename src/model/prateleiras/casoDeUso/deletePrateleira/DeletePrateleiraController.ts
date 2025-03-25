import { Request, Response } from "express";
import { DeletePrateleiraCasoDeUso } from "./DeletePrateleiraCasoDeUso";
import { deletarPrateleiraSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class DeletePrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const deletePrateleiraCasoDeUso = new DeletePrateleiraCasoDeUso();
    const { id } = req.params;
    if (!deletarPrateleiraSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deletePrateleiraCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeletePrateleiraController };