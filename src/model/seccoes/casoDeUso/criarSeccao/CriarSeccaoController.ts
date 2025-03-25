import { CriarSeccaoCasoDeUso } from "./CriarSeccaoCasoDeUso";
import { Request, Response } from "express";
import { criarSeccaoSchema } from "../../../../schema/seccoes";
import { AppError } from "../../../../errors/AppError";
class CriarSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const seccaoCasoDeUso = new CriarSeccaoCasoDeUso();
<<<<<<< HEAD
    const { nomeSeccao, descricaoSeccao } = req.body;
    if (!criarSeccaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
=======
    const { nomeSeccao, descricao } = req.body;
    if (!criarSeccaoSchema.validate(req.body)) return res.status(400).json({});
>>>>>>> 8b4f9671114a7378a553c1a8923114acc7613d05
    const result = await seccaoCasoDeUso.execute({
      nomeSeccao,
      descricao,
    });
    return res.status(201).json(result);
  }
}
export { CriarSeccaoController };
