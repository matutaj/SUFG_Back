import { Request, Response } from "express";
import { ListarUmaSeccaoPeloIdCasoDeUso } from "./ListarSeccaoPeloIdCasoDeUso";
class ListarUmaSeccaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaSeccaoPeloIdCasoDeUso = new ListarUmaSeccaoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmaSeccaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaSeccaoPeloIdController };