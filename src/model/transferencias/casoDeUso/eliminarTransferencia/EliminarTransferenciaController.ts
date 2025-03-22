import { Request, Response } from "express";
import { DeleteTransferenciaCasoDeUso } from "./EliminarTransferenciaCasoDeUso";
class DeleteTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteTransferenciaCasoDeUso = new DeleteTransferenciaCasoDeUso();
    const { id } = req.params;
    const result = await deleteTransferenciaCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteTransferenciaController };