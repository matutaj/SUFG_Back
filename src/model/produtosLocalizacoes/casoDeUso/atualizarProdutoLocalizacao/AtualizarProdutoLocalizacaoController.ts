import { Request, Response } from "express";
import { AtualizarProdutoLocalizacaoCasoDeUso } from "./AtualizarProdutoLocalizacaoCasoDeUso";
import { atualizarProdutoLocalizacaoSchema } from "../../../../schema/produtosLocalizacoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarProdutoLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarProdutoLocalizacaoCasoDeUso = new AtualizarProdutoLocalizacaoCasoDeUso();
    const { id } = req.params;
    const {
      id_seccao,
      id_prateleira,
      id_corredor,
      id_produto,
      id_localizacao,
      quantidadeProduto,
      quantidadeMinimaProduto,
    } = req.body;
    if (!await atualizarProdutoLocalizacaoSchema.validate(req.body))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarProdutoLocalizacaoSchema.validate(req.params))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarProdutoLocalizacaoCasoDeUso.execute({
      id,
      id_seccao,
      id_prateleira,
      id_corredor,
      id_produto,
      id_localizacao,
      quantidadeProduto,
      quantidadeMinimaProduto,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarProdutoLocalizacaoController };