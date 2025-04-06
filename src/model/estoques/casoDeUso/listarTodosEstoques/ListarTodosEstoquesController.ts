import { Request, Response } from "express";
import { ListarTodosEstoquesCasoDeUso } from "./ListarTodosEstoquesCasoDeUso";

class ListarTodosEstoquesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosEstoquesCasoDeUso = new ListarTodosEstoquesCasoDeUso();
    const result = await listarTodosEstoquesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosEstoquesController };