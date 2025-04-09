import { Request, Response } from "express";
import { ListarUmFuncionarioTarefaPeloIdCasoDeUso } from "./ListarFuncionarioTarefaPeloIdCasoDeUso";
import { listarFuncionarioTarefaPeloIdSchema } from "../../../../schema/funcionariosTarefas";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioTarefaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioTarefaPeloIdCasoDeUso = new ListarUmFuncionarioTarefaPeloIdCasoDeUso();
    const { id } = req.params;
    if (!listarFuncionarioTarefaPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioTarefaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioTarefaPeloIdController };