import { Request, Response } from "express";
import { DeletePermissaoCasoDeUso } from "./DeletePermissaoCasoDeUso";

class DeletePermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deletePermissaoCasoDeUso = new DeletePermissaoCasoDeUso();
    const { id } = req.params;
    const result = await deletePermissaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeletePermissaoController };