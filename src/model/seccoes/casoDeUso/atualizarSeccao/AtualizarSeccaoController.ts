import { Request, Response } from "express";
import { AtualizarSeccaoCasoDeUso } from "./AtualizarSeccaoCasoDeUso";
import { atualizarSeccaoSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const seccaoCasoDeUso = new AtualizarSeccaoCasoDeUso();
    const { id } = req.params;
    const { nomeSeccao, descricao } = req.body;
    if (!await atualizarSeccaoSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarSeccaoSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await seccaoCasoDeUso.execute({ id, nomeSeccao, descricao });
    return res.status(201).json(result);
  }
}
export { AtualizarSeccaoController };
