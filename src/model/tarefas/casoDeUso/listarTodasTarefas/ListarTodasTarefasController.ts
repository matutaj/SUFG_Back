import { Request, Response } from "express";
import { ListarTodasTarefasCasoDeUso } from "./ListarTodasTarefasCasoDeUso";

class ListarTodasTarefasController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodasTarefasCasoDeUso = new ListarTodasTarefasCasoDeUso();
    const result = await listarTodasTarefasCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodasTarefasController };