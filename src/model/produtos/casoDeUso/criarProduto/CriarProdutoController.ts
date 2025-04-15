import { CriarProdutoCasoDeUso } from "./CriarProdutoCasoDeUso";
import { Request, Response } from "express";
import { criarProdutoSchema } from "../../../../schema/produtos";
import { AppError } from "../../../../errors/AppError";
class CriarProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const produtoCasoDeUso = new CriarProdutoCasoDeUso();
    const {
      nomeProduto,
      precoVenda,
      unidadeConteudo,
      unidadeMedida,
      quantidadePorUnidade,
      referenciaProduto,
      id_categoriaProduto,
    } = req.body;
    if (!(await criarProdutoSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
    const result = await produtoCasoDeUso.execute({
      nomeProduto,
      precoVenda,
      unidadeConteudo,
      unidadeMedida,
      quantidadePorUnidade,
      referenciaProduto,
      id_categoriaProduto,
    });
    return res.status(201).json(result);
  }
}
export { CriarProdutoController };
