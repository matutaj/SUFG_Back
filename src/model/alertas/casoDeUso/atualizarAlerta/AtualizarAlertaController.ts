import { Request, Response } from "express";
import { AtualizarAlertaCasoDeUso } from "./AtualizarAlertaCasoDeUso";

class AtualizarAlertaController {
  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { id_caixa, id_produto, descricaoAlerta, nomeAlerta } = req.body;

    const atualizarAlertaCasoDeUso = new AtualizarAlertaCasoDeUso();
    const alerta = await atualizarAlertaCasoDeUso.execute({
      id,
      id_caixa,
      id_produto,
      descricaoAlerta,
      nomeAlerta,
    });

    return res.json(alerta);
  }
}
export { AtualizarAlertaController };
