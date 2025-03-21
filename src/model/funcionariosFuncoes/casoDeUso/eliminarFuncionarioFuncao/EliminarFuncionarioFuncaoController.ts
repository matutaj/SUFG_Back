import { Request, Response } from "express";
import { DeleteFuncionarioFuncaoCasoDeUso } from "./EliminarFuncionarioFuncaoCasoDeUso";
class DeleteFuncionarioFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioFuncaoCasoDeUso = new DeleteFuncionarioFuncaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteFuncionarioFuncaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioFuncaoController };