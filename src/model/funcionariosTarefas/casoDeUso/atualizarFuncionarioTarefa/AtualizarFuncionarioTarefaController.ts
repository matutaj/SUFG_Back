import { Request, Response } from "express";
import { AtualizarFuncionarioTarefaCasoDeUso } from "./AtualizarFuncionarioTarefaCasoDeUso";
import { atualizarFuncionarioTarefaSchema } from "../../../../schema/funcionariosTarefas";
import { AppError } from "../../../../errors/AppError";

class AtualizarFuncionarioTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioTarefaCasoDeUso = new AtualizarFuncionarioTarefaCasoDeUso();
    const { id } = req.params;
    const { id_funcionario, id_tarefa, status } = req.body;
    if (!(await atualizarFuncionarioTarefaSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    if (!(await atualizarFuncionarioTarefaSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarFuncionarioTarefaCasoDeUso.execute({ id, id_funcionario, id_tarefa, status});
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioTarefaController };