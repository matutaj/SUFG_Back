import { Request, Response } from "express";
import { ListarTodasEntradasEstoqueCasoDeUso } from "./ListarTodasEntradasEstoqueCasoDeUso";

class ListarTodasEntradasEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodasEntradasEstoqueCasoDeUso = new ListarTodasEntradasEstoqueCasoDeUso();
    const result = await listarTodasEntradasEstoqueCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodasEntradasEstoqueController };