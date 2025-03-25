import { Request, Response } from "express";
import { DeleteFuncaoCasoDeUso } from "./DeleteFuncaoCasoDeUso";
import { deletarFuncaoSchema } from "../../../../schema/funcoes";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncaoCasoDeUso = new DeleteFuncaoCasoDeUso();
    const { id } = req.params;
    if (!deletarFuncaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteFuncaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteFuncaoController };