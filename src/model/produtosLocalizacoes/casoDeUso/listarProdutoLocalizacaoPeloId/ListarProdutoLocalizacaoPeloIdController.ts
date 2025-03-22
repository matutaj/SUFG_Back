import { Request, Response } from "express";
import { ListarUmProdutoLocalizacaoPorIdCasoDeUso } from "./ListarProdutoLocalizacaoPeloIdCasoDeUso";
class ListarUmProdutoLocalizacaoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmProdutoLocalizacaoPorIdCasoDeUso = new ListarUmProdutoLocalizacaoPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmProdutoLocalizacaoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmProdutoLocalizacaoPorIdController };