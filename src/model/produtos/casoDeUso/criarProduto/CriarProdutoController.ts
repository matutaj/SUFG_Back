import { CriarProdutoCasoDeUso } from "./CriarProdutoCasoDeUso";
import { Request, Response } from "express";
import { criarProdutoSchema } from "../../../../schema/produtos";
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
    if (!criarProdutoSchema.validate(req.body))
      return res.status(400).json({ message: "Dados inválidos" });
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
