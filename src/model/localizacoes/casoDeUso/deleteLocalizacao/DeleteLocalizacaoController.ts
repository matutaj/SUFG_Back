import { Request, Response } from "express";
import { DeleteLocalizacaoCasoDeUso } from "./DeleteLocalizacaoCasoDeUso";
import { deletarLocalizacaoSchema } from "../../../../schema/localizacao";
import { AppError } from "../../../../errors/AppError";
class DeleteLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteLocalizacaoCasoDeUso = new DeleteLocalizacaoCasoDeUso();
    const { id } = req.params;
    if (!deletarLocalizacaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteLocalizacaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteLocalizacaoController };
