import { Request, Response } from "express";
import { DeleteProdutoLocalizacaoCasoDeUso } from "./DeleteProdutoLocalizacaoCasoDeUso";

class DeleteProdutoLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteProdutoLocalizacaoCasoDeUso = new DeleteProdutoLocalizacaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteProdutoLocalizacaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteProdutoLocalizacaoController };