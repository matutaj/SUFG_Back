import { Request, Response } from "express";
import { ListarProdutosAbaixoMinimoCasoDeUso } from "./ListarProdutosAbaixoMinimoCasoDeUso";

class ListarProdutosAbaixoMinimoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim } = req.query;
    const listarProdutosAbaixoMinimoCasoDeUso =
      new ListarProdutosAbaixoMinimoCasoDeUso();
    const result = await listarProdutosAbaixoMinimoCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string)
    );
    return res.status(200).json(result);
  }
}

export { ListarProdutosAbaixoMinimoController };