import { CriarProdutoCasoDeUso } from "./CriarProdutoCasoDeUso";
import { Request, Response } from "express";
class CriarProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const produtoCasoDeUso = new CriarProdutoCasoDeUso();
    const {
      descricaoProduto,
      nomeProduto,
      custoAquisicao,
      precoVenda,
      codigoBarras,
      unidadeConteudo,
      unidadeMedida,
      quantidadeEstoque,
      referenciaProduto,
      id_categoriaProduto,
    } = req.body;
    const result = await produtoCasoDeUso.execute({
      descricaoProduto,
      nomeProduto,
      custoAquisicao,
      precoVenda,
      codigoBarras,
      unidadeConteudo,
      unidadeMedida,
      quantidadeEstoque,
      referenciaProduto,
      id_categoriaProduto,
    });
    return res.status(201).json(result);
  }
}
export { CriarProdutoController };
