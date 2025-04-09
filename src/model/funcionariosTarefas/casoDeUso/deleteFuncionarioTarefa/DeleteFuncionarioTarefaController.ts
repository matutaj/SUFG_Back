import { Request, Response } from "express";
import { DeleteFuncionarioTarefaCasoDeUso } from "./DeleteFuncionarioTarefaCasoDeUso";
import { deletarFuncionarioTarefaSchema } from "../../../../schema/funcionariosTarefas";
import { AppError } from "../../../../errors/AppError";

class DeleteFuncionarioTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const eliminarFuncionarioTarefaCasoDeUso = new DeleteFuncionarioTarefaCasoDeUso();
    const { id } = req.params;
    if (!deletarFuncionarioTarefaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    await eliminarFuncionarioTarefaCasoDeUso.execute(id);
    return res.status(204).send();
  }
}

export { DeleteFuncionarioTarefaController };