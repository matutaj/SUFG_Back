import { Request, Response } from "express";
import { ListarUmFuncionarioPeloIdCasoDeUso } from "./ListarFuncionarioPeloIdCasoDeUso";
import { listarFuncionarioPeloIdSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioPeloIdCasoDeUso = new ListarUmFuncionarioPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarFuncionarioPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioPeloIdController };