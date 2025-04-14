import { Request, Response } from "express";
import { CriarTarefaCasoDeUso } from "./CriarTarefaCasoDeUso";
import { criarTarefaSchema } from "../../../../schema/tarefas";
import { AppError } from "../../../../errors/AppError";

class CriarTarefaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarTarefaCasoDeUso = new CriarTarefaCasoDeUso();
    const { nome, descricao } = req.body;
    if (!(await criarTarefaSchema.isValid(req.body))) throw new AppError("Erro na Validação dos dados");
    const result = await criarTarefaCasoDeUso.execute({ nome, descricao});
    return res.status(201).json(result);
  }
}

export { CriarTarefaController };