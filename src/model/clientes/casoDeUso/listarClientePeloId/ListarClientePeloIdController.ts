import { Request, Response } from "express";
import { ListarUmClientePeloIdCasoDeUso } from "./ListarClientePeloIdCasoDeUso";
class ListarUmClientePeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmClientePeloIdCasoDeUso = new ListarUmClientePeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmClientePeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmClientePeloIdController };