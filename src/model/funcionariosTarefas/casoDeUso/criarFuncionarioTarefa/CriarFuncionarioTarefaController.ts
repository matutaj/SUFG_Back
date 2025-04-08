import { Request, Response } from "express";
import { CriarFuncionarioTarefaCasoDeUso } from "./CriarFuncionarioTarefaCasoDeUso";
import { criarFuncionarioTarefaSchema } from "../../../../schema/funcionariosTarefas";
import { AppError } from "../../../../errors/AppError"; 

class CriarFuncionarioTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarFuncionarioTarefaCasoDeUso = new CriarFuncionarioTarefaCasoDeUso();
    const { id_funcionario, id_tarefa } = req.body;
    if (!(await criarFuncionarioTarefaSchema.isValid(req.body))) throw new AppError("Erro na Validação dos dados");
    const result = await criarFuncionarioTarefaCasoDeUso.execute({ id_funcionario, id_tarefa });
    return res.status(201).json(result);
  }
}

export { CriarFuncionarioTarefaController };