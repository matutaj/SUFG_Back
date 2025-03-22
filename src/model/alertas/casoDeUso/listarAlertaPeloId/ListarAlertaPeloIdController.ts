import { Request, Response } from "express";
import { ListarUmAlertaPeloIdCasoDeUso } from "./ListarAlertaPeloIdCasoDeUso";

class ListarUmAlertaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmAlertaPeloIdCasoDeUso = new ListarUmAlertaPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmAlertaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmAlertaPeloIdController };