import { ListarCorredorPeloNomeCasoDeUso } from "../listarCorredorPeloNome/ListarCorredorPeloNomeCasoDeUso";
import { Request, Response } from "express";
class ListarTodosCorredorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarCorredorPeloNomeCasoDeUso =
      new ListarCorredorPeloNomeCasoDeUso();
    const { nomeCorredor } = req.params;
    const result = await listarCorredorPeloNomeCasoDeUso.execute(nomeCorredor);
    return res.status(201).json(result);
  }
}

export { ListarTodosCorredorController };
