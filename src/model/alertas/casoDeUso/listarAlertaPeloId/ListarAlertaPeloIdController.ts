import { Request, Response } from "express";
import { ListarUmAlertaPeloIdCasoDeUso } from "./ListarAlertaPeloIdCasoDeUso";
import { listarAlertaPeloIdSchema } from "../../../../schema/alertas";
import { AppError } from "../../../../errors/AppError";
class ListarUmAlertaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmAlertaPeloIdCasoDeUso = new ListarUmAlertaPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarAlertaPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmAlertaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmAlertaPeloIdController };