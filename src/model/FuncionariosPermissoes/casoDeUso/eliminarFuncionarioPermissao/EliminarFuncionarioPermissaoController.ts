import { Request, Response } from "express";
import { DeleteFuncionarioPermissaoCasoDeUso } from "./EliminarFuncionarioPermissaoCasoDeUso";
import { deletarFuncionarioPermissaoSchema } from "../../../../schema/funcionariosPermissoes";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncionarioPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioPermissaoCasoDeUso = new DeleteFuncionarioPermissaoCasoDeUso();
    const { id } = req.params;
    if (!deletarFuncionarioPermissaoSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await deleteFuncionarioPermissaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioPermissaoController };