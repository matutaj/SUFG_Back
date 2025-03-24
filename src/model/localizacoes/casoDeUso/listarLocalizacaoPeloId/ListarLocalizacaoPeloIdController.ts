import { Request, Response } from "express";
import { ListarUmLocalizacaoPeloIdCasoDeUso } from "./ListarLocalizacaoPeloIdCasoDeUso";
class ListarUmLocalizacaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmLocalizacaoPeloIdCasoDeUso =
      new ListarUmLocalizacaoPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmLocalizacaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmLocalizacaoPeloIdController };
