import { Request, Response } from "express";
import { ListarTarefaPeloNomeCasoDeUso } from "./ListarTarefaPeloNomeCasoDeUso";
import { listarTarefaPeloNomeSchema } from "../../../../schema/tarefas";
import { AppError } from "../../../../errors/AppError";

class ListarTarefaPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTarefaPeloNomeCasoDeUso = new ListarTarefaPeloNomeCasoDeUso();
    const { nome } = req.params;
    if (!await listarTarefaPeloNomeSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarTarefaPeloNomeCasoDeUso.execute(nome);
    return res.status(200).json(result);
  }
}

export { ListarTarefaPeloNomeController };