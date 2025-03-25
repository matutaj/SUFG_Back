import { Request, Response } from "express";
import { ListarUmFuncionarioFuncaoPeloIdCasoDeUso } from "./ListarUmFuncionarioFuncaoPeloIdCasoDeUso";
import { listarFuncionarioFuncaoPeloIdSchema } from "../../../../schema/funcionariosFuncoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioFuncaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioFuncaoPeloIdCasoDeUso = new ListarUmFuncionarioFuncaoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarFuncionarioFuncaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioFuncaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioFuncaoPeloIdController };