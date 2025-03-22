import { Request, Response } from "express";
import { ListarUmaPrateleiraPeloIdCasoDeUso } from "./ListarPrateleiraPeloIdCasoDeUso";
class ListarUmaPrateleiraPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaPrateleiraPeloIdCasoDeUso = new ListarUmaPrateleiraPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmaPrateleiraPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaPrateleiraPeloIdController };