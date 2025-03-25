import { CriarSeccaoCasoDeUso } from "./CriarSeccaoCasoDeUso";
import { Request, Response } from "express";
import { criarSeccaoSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class CriarSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const seccaoCasoDeUso = new CriarSeccaoCasoDeUso();
    const { nomeSeccao, descricaoSeccao } = req.body;
    if (!criarSeccaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await seccaoCasoDeUso.execute({
      nomeSeccao,
      descricaoSeccao,
    });
    return res.status(201).json(result);
  }
}
export { CriarSeccaoController };
