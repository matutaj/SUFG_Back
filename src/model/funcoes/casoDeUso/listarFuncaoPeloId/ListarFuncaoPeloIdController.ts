import { Request, Response } from "express";
import { ListarFuncaoPeloIdCasoDeUso } from "./ListarFuncaoPeloIdCasoDeUso";
import { listarFuncaoPeloIdSchema } from "../../../../schema/funcoes";
import { AppError } from "../../../../errors/AppError";
class ListarFuncaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarFuncaoPeloIdCasoDeUso = new ListarFuncaoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarFuncaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarFuncaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarFuncaoPeloIdController };