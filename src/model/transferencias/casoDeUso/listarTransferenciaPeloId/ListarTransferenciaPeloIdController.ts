import { Request, Response } from "express";
import { ListarUmaTransferenciaPorIdCasoDeUso } from "./ListarTransferenciaPeloIdCasoDeUso";
import { listarTransferenciaPeloIdSchema } from "../../../../schema/transferencias";
import { AppError } from "../../../../errors/AppError";
class ListarUmaTransferenciaPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaTransferenciaPorIdCasoDeUso = new ListarUmaTransferenciaPorIdCasoDeUso();
    const { id } = req.params;
    if (!await listarTransferenciaPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaTransferenciaPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaTransferenciaPorIdController };