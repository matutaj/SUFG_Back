import { Request, Response } from "express";
import { ListarVendaPorIdCasoDeUso } from "./ListarVendaPeloIdCasoDeUso";
class ListarVendaPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarVendaPorIdCasoDeUso = new ListarVendaPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarVendaPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarVendaPorIdController };