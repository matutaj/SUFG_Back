import { Request, Response } from "express";
import { DeleteTransferenciaCasoDeUso } from "./EliminarTransferenciaCasoDeUso";
import { deletarTransferenciaSchema } from "../../../../schema/transferencias";
import { AppError } from "../../../../errors/AppError";
class DeleteTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteTransferenciaCasoDeUso = new DeleteTransferenciaCasoDeUso();
    const { id } = req.params;
    if (!await deletarTransferenciaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteTransferenciaCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteTransferenciaController };