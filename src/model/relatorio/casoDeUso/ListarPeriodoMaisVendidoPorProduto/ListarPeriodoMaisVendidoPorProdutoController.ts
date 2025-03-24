// src/controllers/ListarPeriodoMaisVendidoPorProdutoController.ts
import { Request, Response } from "express";
import { ListarPeriodoMaisVendidoPorProdutoCasoDeUso } from "./ListarPeriodoMaisVendidoPorProdutoCasoDeUso";

class ListarPeriodoMaisVendidoPorProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const { idProduto } = req.params;
    const listarPeriodoMaisVendidoPorProdutoCasoDeUso =
      new ListarPeriodoMaisVendidoPorProdutoCasoDeUso();
    const result = await listarPeriodoMaisVendidoPorProdutoCasoDeUso.execute(
      idProduto
    );
    return res.status(200).json(result);
  }
}

export { ListarPeriodoMaisVendidoPorProdutoController };
