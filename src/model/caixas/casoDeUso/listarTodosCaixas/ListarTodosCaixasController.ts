import { Request, Response } from "express";
import { ListarTodosCaixasCasoDeUso } from "./ListarTodosCaixasCasoDeUso";

class ListarTodosCaixasController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosCaixasCasoDeUso = new ListarTodosCaixasCasoDeUso();
    const result = await listarTodosCaixasCasoDeUso.execute();
    return res.status(201).json(result);
  }
}
export { ListarTodosCaixasController };
