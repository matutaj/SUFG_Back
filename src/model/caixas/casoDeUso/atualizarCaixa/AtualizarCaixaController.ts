import { Request, Response } from "express";
import { AtualizarCaixaCasoDeUso } from "./AtualizarCaixaCasoDeUso";
import { atualizarCaixaSchema } from "../../../../schema/caixas";
import { AppError } from "../../../../errors/AppError";
class AtualizarCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { nomeCaixa, descricao, mac } = req.body;
    if (!id || typeof id !== 'string') {
      throw new AppError("ID inválido");
    }
    if (!await atualizarCaixaSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const atualizarCaixaCasoDeUso = new AtualizarCaixaCasoDeUso();
    const caixa = await atualizarCaixaCasoDeUso.execute({
      id,
      nomeCaixa,
      descricao,
      mac
    });

    return res.json(caixa);
  }
}
export { AtualizarCaixaController };
