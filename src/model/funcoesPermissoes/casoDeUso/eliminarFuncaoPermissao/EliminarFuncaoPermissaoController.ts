import { Request, Response } from "express";
import { DeleteFuncaoPermissaoCasoDeUso } from "./EliminarFuncaoPermissaoCasoDeUso";
import { deletarFuncaoPermissaoSchema } from "../../../../schema/funcoesPermissoes";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncaoPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncaoPermissaoCasoDeUso = new DeleteFuncaoPermissaoCasoDeUso();
    const { id } = req.params;
    if (!await deletarFuncaoPermissaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteFuncaoPermissaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncaoPermissaoController };