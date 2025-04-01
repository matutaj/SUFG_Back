import { CriarProdutoLocalizacaoCasoDeUso } from "./criarProdutoLocalizacaoCasoDeUso";
import { Request, Response } from "express";
import { criarProdutoLocalizacaoSchema } from "../../../../schema/produtosLocalizacoes";
import { AppError } from "../../../../errors/AppError";
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
    if (!(await criarProdutoLocalizacaoSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");
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
