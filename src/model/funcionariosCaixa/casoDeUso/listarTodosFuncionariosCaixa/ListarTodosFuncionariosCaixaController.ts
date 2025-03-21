import { Request, Response } from "express";
import { ListarTodosFuncionariosCaixaCasoDeUso } from "./ListarTodosFuncionariosCaixaCasoDeUso";

class ListarTodosFuncionariosCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosFuncionariosCaixaCasoDeUso = new ListarTodosFuncionariosCaixaCasoDeUso();
    const result = await listarTodosFuncionariosCaixaCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosFuncionariosCaixaController };