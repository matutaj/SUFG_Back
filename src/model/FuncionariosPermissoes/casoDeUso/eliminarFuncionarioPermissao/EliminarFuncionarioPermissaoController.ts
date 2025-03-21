import { Request, Response } from "express";
import { DeleteFuncionarioPermissaoCasoDeUso } from "./EliminarFuncionarioPermissaoCasoDeUso";
class DeleteFuncionarioPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioPermissaoCasoDeUso = new DeleteFuncionarioPermissaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteFuncionarioPermissaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioPermissaoController };