import { Request, Response } from "express";
import { ListarTarefaPeloIdCasoDeUso } from "./ListarTarefaPeloIdCasoDeUso";
import { listarTarefaPeloIdSchema } from "../../../../schema/tarefas";
import { AppError } from "../../../../errors/AppError";

class ListarTarefaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTarefaPeloIdCasoDeUso = new ListarTarefaPeloIdCasoDeUso();
    const { id } = req.params;
    if (!(await listarTarefaPeloIdSchema.isValid(req.params))) throw new AppError("Erro na Validação dos dados");
    const result = await listarTarefaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarTarefaPeloIdController };