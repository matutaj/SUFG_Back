import { Request, Response } from "express";
import { DeleteTarefaCasoDeUso } from "./DeleteTarefaCasoDeUso";
import { deletarTarefaSchema } from "../../../../schema/tarefas";
import { AppError } from "../../../../errors/AppError";

class DeleteTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const eliminarTarefaCasoDeUso = new DeleteTarefaCasoDeUso();
    const { id } = req.params;
    if (!(await deletarTarefaSchema.isValid(req.params))) throw new AppError("Erro na Validação dos dados");
    await eliminarTarefaCasoDeUso.execute(id);
    return res.status(204).send();
  }
}

export { DeleteTarefaController };