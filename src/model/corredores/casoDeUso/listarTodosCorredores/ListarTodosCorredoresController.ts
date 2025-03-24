import { ListarCorredorPeloNomeCasoDeUso } from "./ListarTodosCorredoresCasoDeUso";
import { Request, Response } from "express";
class ListarTodosCorredorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarCorredorPeloNomeCasoDeUso =
      new ListarCorredorPeloNomeCasoDeUso();
    const result = await listarCorredorPeloNomeCasoDeUso.execute();
    return res.status(201).json(result);
  }
}

export { ListarTodosCorredorController };
