import { AppError } from "../../../../errors/AppError";
import { criarCaixaSchema } from "../../../../schema/caixas";
import { CriarCaixaCasoDeUso } from "./CriarCaixaCasoDeUso";
import { Request, Response } from "express";
class CriarCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarCaixaCasoDeUso = new CriarCaixaCasoDeUso();
    const { nomeCaixa, descricao } = req.body;
    if (!await criarCaixaSchema.isValid(req.body)) {
      throw new AppError("Erro na validação dos campos");
    }
    const result = await criarCaixaCasoDeUso.execute({
      nomeCaixa,
      descricao,
    });
    return res.status(201).json(result);
  }
}
export { CriarCaixaController };
