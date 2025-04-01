import { criarAlertaSchema } from "../../../../schema/alertas";
import { Request, Response } from "express";
import { CriarAlertaCasoDeUso } from "./CriarAlertaCasoDeUso";
import { AppError } from "../../../../errors/AppError";

class CriarAlertaController {
  async handle(req: Request, res: Response): Promise<any> {
    const AlertaCasoDeUso = new CriarAlertaCasoDeUso();
    const { descricao, nomeAlerta, id_caixa, id_produto } = req.body;
    if (!await criarAlertaSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await AlertaCasoDeUso.execute({
      descricao,
      nomeAlerta,
      id_caixa,
      id_produto,
    });
    return res.status(201).json(result);
  }
}
export { CriarAlertaController };
