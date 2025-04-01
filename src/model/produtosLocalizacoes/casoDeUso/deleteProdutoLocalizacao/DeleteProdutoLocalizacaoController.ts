import { Request, Response } from "express";
import { DeleteProdutoLocalizacaoCasoDeUso } from "./DeleteProdutoLocalizacaoCasoDeUso";
import { deletarProdutoLocalizacaoSchema } from "../../../../schema/produtosLocalizacoes";
import { AppError } from "../../../../errors/AppError";
class DeleteProdutoLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteProdutoLocalizacaoCasoDeUso = new DeleteProdutoLocalizacaoCasoDeUso();
    const { id } = req.params;
    if (!await deletarProdutoLocalizacaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteProdutoLocalizacaoCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteProdutoLocalizacaoController };