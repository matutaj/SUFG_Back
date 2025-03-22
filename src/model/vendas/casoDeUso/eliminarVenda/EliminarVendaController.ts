import { Request, Response } from "express";
import { DeleteVendaCasoDeUso } from "./EliminarVendaCasoDeUso";
class DeleteVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteVendaCasoDeUso = new DeleteVendaCasoDeUso();
    const { id } = req.params;
    const result = await deleteVendaCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { DeleteVendaController };