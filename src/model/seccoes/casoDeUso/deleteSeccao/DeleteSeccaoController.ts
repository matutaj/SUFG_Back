import { Request, Response } from "express";
import { DeleteSeccaoCasoDeUso } from "./DeleteSeccaoCasoDeUso";
import { deletarSeccaoSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class DeleteSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteSeccaoCasoDeUso = new DeleteSeccaoCasoDeUso();
    const { id } = req.params;
    if (!deletarSeccaoSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await deleteSeccaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteSeccaoController };
