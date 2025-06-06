import { Request, Response } from "express";
import { ListarAlertaPeloNomeCasoDeUso } from "./ListarAlertaPeloNomeCasoDeUso";
import { listarAlertaPeloNomeSchema } from "../../../../schema/alertas";
import { AppError } from "../../../../errors/AppError";
class ListarAlertaPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const { nomeAlerta } = req.body;
    const listarAlertaPeloNomeCasoDeUso = new ListarAlertaPeloNomeCasoDeUso();
    if (!await listarAlertaPeloNomeSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const alerta = await listarAlertaPeloNomeCasoDeUso.execute(nomeAlerta);
    return res.json(alerta);
  }
}
export { ListarAlertaPeloNomeController };
