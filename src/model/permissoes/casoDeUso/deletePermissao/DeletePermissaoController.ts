import { Request, Response } from "express";
import { DeletePermissaoCasoDeUso } from "./DeletePermissaoCasoDeUso";
import { deletarPermissaoSchema } from "../../../../schema/permissoes";
import { AppError } from "../../../../errors/AppError";
class DeletePermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deletePermissaoCasoDeUso = new DeletePermissaoCasoDeUso();
    const { id } = req.params;
    if (!await deletarPermissaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deletePermissaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeletePermissaoController };