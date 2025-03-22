import { Request, Response } from "express";
import { ListarUmProdutoPorIdCasoDeUso } from "./ListarProdutoPeloIdCasoDeUso";
class ListarUmProdutoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmProdutoPorIdCasoDeUso = new ListarUmProdutoPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmProdutoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmProdutoPorIdController };