import { Request, Response } from "express";
import { DeleteFuncaoPermissaoCasoDeUso } from "./EliminarFuncaoPermissaoCasoDeUso";
class DeleteFuncaoPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncaoPermissaoCasoDeUso = new DeleteFuncaoPermissaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteFuncaoPermissaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncaoPermissaoController };