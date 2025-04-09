import { Request, Response } from "express";
import { ListarTodosFuncionariosTarefasCasoDeUso } from "./ListarTodosFuncionariosTarefasCasoDeUso";

class ListarTodosFuncionariosTarefasController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosFuncionariosTarefasCasoDeUso = new ListarTodosFuncionariosTarefasCasoDeUso();
    const result = await listarTodosFuncionariosTarefasCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosFuncionariosTarefasController };