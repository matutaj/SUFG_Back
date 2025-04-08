import { Request, Response } from "express";
import { AtualizarTarefaCasoDeUso } from "./AtualizarTarefaCasoDeUso";
import { atualizarTarefaSchema } from "../../../../schema/tarefas";
import { AppError } from "../../../../errors/AppError";

class AtualizarTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarTarefaCasoDeUso = new AtualizarTarefaCasoDeUso();
    const { id } = req.params;
    const { nome } = req.body;
    if (!await atualizarTarefaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    if (!await atualizarTarefaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await atualizarTarefaCasoDeUso.execute({ id, nome });
    return res.status(200).json(result);
  }
}

export { AtualizarTarefaController };