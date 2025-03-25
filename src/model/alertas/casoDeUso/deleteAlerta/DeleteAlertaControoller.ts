import { Request, Response } from "express";
import { DeleteAlertaCasoDeUso } from "./DeleteAlertaCasoDeUso";
import { deletarAlertaSchema } from "../../../../schema/alertas";
import { AppError } from "../../../../errors/AppError";

class DeleteAlertaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteAlertaCasoDeUso = new DeleteAlertaCasoDeUso();
    if (!deletarAlertaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    await deleteAlertaCasoDeUso.execute(id);
    res.sendStatus(200);
  }
}

export { DeleteAlertaController };
