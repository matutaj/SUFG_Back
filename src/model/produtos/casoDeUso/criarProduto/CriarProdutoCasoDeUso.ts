import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { DadosProduto } from "../../repositorioProduto/IProduto";
import { AppError } from "../../../../errors/AppError";

class CriarProdutoCasoDeUso {
  async execute({
    nomeProduto,
    precoVenda,
    unidadeConteudo,
    unidadeMedida,
    quantidadePorUnidade,
    referenciaProduto,
    id_categoriaProduto,
  }: DadosProduto): Promise<produtos> {
    const repositorioProduto = new ProdutoRepositorio();

    const existeNome = await repositorioProduto.listarUmProdutoPeloNome(
      nomeProduto
    );
    if (existeNome) {
      throw new AppError("Já existe um produto com esse nome");
    }

    const result = await repositorioProduto.criarProduto({
      nomeProduto,
      precoVenda,
      unidadeConteudo,
      unidadeMedida,
      quantidadePorUnidade,
      referenciaProduto,
      id_categoriaProduto,
    });

    return result;
  }

}

export { CriarProdutoCasoDeUso };
