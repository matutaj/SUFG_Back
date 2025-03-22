import { Request, Response } from "express";
import { AtualizarProdutoLocalizacaoCasoDeUso } from "./AtualizarProdutoLocalizacaoCasoDeUso";

class AtualizarProdutoLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarProdutoLocalizacaoCasoDeUso = new AtualizarProdutoLocalizacaoCasoDeUso();
    const {
      id,
      id_seccao,
      id_prateleira,
      id_corredor,
      id_produto,
      id_localizacao,
      quantidadeProduto,
      quantidadeMinimaProduto,
    } = req.body;
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