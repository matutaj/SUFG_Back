import { Request, Response } from "express";
import { ListarUmLocalizacaoPeloIdCasoDeUso } from "./ListarLocalizacaoPeloIdCasoDeUso";
import { listarLocalizacaoPeloIdSchema } from "../../../../schema/localizacao";
import { AppError } from "../../../../errors/AppError";
class ListarUmLocalizacaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmLocalizacaoPeloIdCasoDeUso =
      new ListarUmLocalizacaoPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarLocalizacaoPeloIdSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await listarUmLocalizacaoPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmLocalizacaoPeloIdController };
