import { Request, Response } from "express";
import { DeleteVendaCasoDeUso } from "./EliminarVendaCasoDeUso";
import { deletarVendaSchema } from "../../../../schema/vendas";
import { AppError } from "../../../../errors/AppError";
class DeleteVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteVendaCasoDeUso = new DeleteVendaCasoDeUso();
    const { id } = req.params;
    if (!deletarVendaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteVendaCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { DeleteVendaController };