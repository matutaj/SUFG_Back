import { Request, Response } from "express";
import { DeleteFuncionarioFuncaoCasoDeUso } from "./EliminarFuncionarioFuncaoCasoDeUso";
import { deletarFuncionarioFuncaoSchema } from "../../../../schema/funcionariosFuncoes";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncionarioFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioFuncaoCasoDeUso = new DeleteFuncionarioFuncaoCasoDeUso();
    const { id } = req.params;
    if (!deletarFuncionarioFuncaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteFuncionarioFuncaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioFuncaoController };