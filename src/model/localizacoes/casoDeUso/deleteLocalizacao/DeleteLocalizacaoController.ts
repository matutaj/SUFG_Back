import { Request, Response } from "express";
import { DeleteLocalizacaoCasoDeUso } from "./DeleteLocalizacaoCasoDeUso";

class DeleteLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteLocalizacaoCasoDeUso = new DeleteLocalizacaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteLocalizacaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteLocalizacaoController };