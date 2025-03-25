import { Request, Response } from "express";
import { ListarUmProdutoLocalizacaoPorIdCasoDeUso } from "./ListarProdutoLocalizacaoPeloIdCasoDeUso";
import { listarProdutoLocalizacaoPeloIdSchema } from "../../../../schema/produtosLocalizacoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmProdutoLocalizacaoPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmProdutoLocalizacaoPorIdCasoDeUso = new ListarUmProdutoLocalizacaoPorIdCasoDeUso();
    const { id } = req.params;
    if (!listarProdutoLocalizacaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmProdutoLocalizacaoPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmProdutoLocalizacaoPorIdController };