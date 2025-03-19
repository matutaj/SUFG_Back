import { Request, Response } from "express";
import { CriarPrateleiraCasoDeUso } from "./CriarPrateleiraCasoDeUso";
import { criarPrateleiraSchema } from "../../../../schema/prateleiras";

class CriarPrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new CriarPrateleiraCasoDeUso();
    const { descricaoPrateleira, nomePrateleira } = req.body;
    if (!criarPrateleiraSchema.validate({ descricaoPrateleira, nomePrateleira }))
      return res.status(400).json({ message: "Dados inválidos" });
    const result = await prateleiraCasoDeUso.execute({
      descricaoPrateleira,
      nomePrateleira,
    });
    return res.status(201).json(result);
  }
}

export { CriarPrateleiraController };
