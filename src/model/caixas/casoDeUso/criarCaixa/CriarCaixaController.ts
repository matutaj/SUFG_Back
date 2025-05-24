import { AppError } from "../../../../errors/AppError";
import { criarCaixaSchema } from "../../../../schema/caixas";
import { CriarCaixaCasoDeUso } from "./CriarCaixaCasoDeUso";
import { Request, Response } from "express";
class CriarCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarCaixaCasoDeUso = new CriarCaixaCasoDeUso();
    const { nomeCaixa, descricao, mac } = req.body;
    if (!await criarCaixaSchema.isValid(req.body)) {
      throw new AppError("Erro na validação dos campos");
    }
    const result = await criarCaixaCasoDeUso.execute({
      nomeCaixa,
      descricao,
      mac
    });
    return res.status(201).json(result);
  }
}
export { CriarCaixaController };
