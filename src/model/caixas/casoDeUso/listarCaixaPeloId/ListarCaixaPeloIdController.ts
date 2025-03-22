import { Request, Response } from "express";
import { ListarUmCaixaPeloIdCasoDeUso } from "./ListarCaixaPeloIdCasoDeUso";

class ListarUmCaixaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmCaixaPeloIdCasoDeUso = new ListarUmCaixaPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmCaixaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmCaixaPeloIdController };