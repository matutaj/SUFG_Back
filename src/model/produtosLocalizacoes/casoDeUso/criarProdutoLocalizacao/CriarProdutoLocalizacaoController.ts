import { CriarProdutoLocalizacaoCasoDeUso } from "./criarProdutoLocalizacaoCasoDeUso";
import { Request, Response } from "express";
import { criarProdutoLocalizacaoSchema } from "../../../../schema/produtosLocalizacoes";
class CriarProdutoLocalizacaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const produtoLocalizacaoCasoDeUso = new CriarProdutoLocalizacaoCasoDeUso();
    const {
      id_corredor,
      id_localizacao,
      id_prateleira,
      id_produto,
      id_seccao,
      quantidadeMinimaProduto,
      quantidadeProduto,
    } = req.body;
    if (!criarProdutoLocalizacaoSchema.validate(req.body))
      return res.status(400).json({ message: "Dados inválidos" });
    const result = await produtoLocalizacaoCasoDeUso.execute({
      id_corredor,
      id_localizacao,
      id_prateleira,
      id_produto,
      id_seccao,
      quantidadeMinimaProduto,
      quantidadeProduto,
    });
    return res.status(201).json(result);
  }
}
export { CriarProdutoLocalizacaoController };
