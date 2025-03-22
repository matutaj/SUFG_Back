import { Request, Response } from "express";
import { ListarUmCorredorPeloIdCasoDeUso } from "./ListarCorredorPeloIdCasoDeUso";
class ListarUmCorredorPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmCorredorPeloIdCasoDeUso = new ListarUmCorredorPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmCorredorPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmCorredorPeloIdController };