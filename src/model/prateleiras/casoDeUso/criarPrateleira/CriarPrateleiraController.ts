import { Request, Response } from "express";
import { CriarPrateleiraCasoDeUso } from "./CriarPrateleiraCasoDeUso";
import { criarPrateleiraSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class CriarPrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new CriarPrateleiraCasoDeUso();
<<<<<<< HEAD
    const { descricaoPrateleira, nomePrateleira } = req.body;
    if (!criarPrateleiraSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
=======
    const { descricao, nomePrateleira } = req.body;
    if (!criarPrateleiraSchema.validate({ descricao, nomePrateleira }))
      return res.status(400).json({ message: "Dados inválidos" });
>>>>>>> 8b4f9671114a7378a553c1a8923114acc7613d05
    const result = await prateleiraCasoDeUso.execute({
      descricao,
      nomePrateleira,
    });
    return res.status(201).json(result);
  }
}

export { CriarPrateleiraController };
