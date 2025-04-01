import { Request, Response } from "express";
import { CriarPrateleiraCasoDeUso } from "./CriarPrateleiraCasoDeUso";
import { criarPrateleiraSchema } from "../../../../schema/prateleiras";
import { AppError } from "../../../../errors/AppError";
class CriarPrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new CriarPrateleiraCasoDeUso();
    const { descricao, nomePrateleira } = req.body;
    if (!await criarPrateleiraSchema.validate({ descricao, nomePrateleira }))
      return res.status(400).json({ message: "Dados inválidos" });
    const result = await prateleiraCasoDeUso.execute({
      descricao,
      nomePrateleira,
    });
    return res.status(201).json(result);
  }
}

export { CriarPrateleiraController };
