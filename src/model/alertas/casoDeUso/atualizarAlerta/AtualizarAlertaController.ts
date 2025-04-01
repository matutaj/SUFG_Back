import { Request, Response } from "express";
import { AtualizarAlertaCasoDeUso } from "./AtualizarAlertaCasoDeUso";
import { atualizarAlertaSchema } from "../../../../schema/alertas";
import { AppError } from "../../../../errors/AppError";
class AtualizarAlertaController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { id_caixa, id_produto, descricao, nomeAlerta } = req.body;
    if (!await  atualizarAlertaSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarAlertaSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const atualizarAlertaCasoDeUso = new AtualizarAlertaCasoDeUso();
    const alerta = await atualizarAlertaCasoDeUso.execute({
      id,
      id_caixa,
      id_produto,
      descricao,
      nomeAlerta,
    });

    return res.json(alerta);
  }
}
export { AtualizarAlertaController };
