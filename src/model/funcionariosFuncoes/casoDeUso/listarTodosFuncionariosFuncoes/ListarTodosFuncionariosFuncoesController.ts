import { Request, Response } from "express";
import { ListarTodosFuncionariosFuncoesCasoDeUso } from "./ListarTodosFuncionariosFuncoesCasoDeUso";

class ListarTodosFuncionariosFuncoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosFuncionariosFuncoesCasoDeUso = new ListarTodosFuncionariosFuncoesCasoDeUso();
    const result = await listarTodosFuncionariosFuncoesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosFuncionariosFuncoesController };