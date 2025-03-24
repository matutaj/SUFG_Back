// src/controllers/ListarProdutosMaisVendidosController.ts
import { Request, Response } from "express";
import { ListarProdutosMaisVendidosCasoDeUso } from "./ListarProdutosMaisVendidosCasoDeUso";

class ListarProdutosMaisVendidosController {
  async handle(req: Request, res: Response): Promise<any> {
    const { dataInicio, dataFim, limite } = req.query;

    const listarProdutosMaisVendidosCasoDeUso =
      new ListarProdutosMaisVendidosCasoDeUso();
    const result = await listarProdutosMaisVendidosCasoDeUso.execute(
      new Date(dataInicio as string),
      new Date(dataFim as string),
      limite ? Number(limite) : undefined
    );
    return res.status(200).json(result);
  }
}

export { ListarProdutosMaisVendidosController };
