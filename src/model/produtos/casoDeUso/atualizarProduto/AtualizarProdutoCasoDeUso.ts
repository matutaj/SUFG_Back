import { produtos } from "@prisma/client";
import { DadosProduto } from "../../repositorioProduto/IProduto";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { CategoriaProdutoRepositorio } from "../../../categoriaProdutos/repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";
class AtualizarProdutoCasoDeUso {
  async execute({
    id,
    id_categoriaProduto,
    referenciaProduto,
    nomeProduto,

    custoAquisicao,
    precoVenda,
    quantidadeEstoque,
    unidadeMedida,
    codigoBarras,
    unidadeConteudo,
  }: DadosProduto): Promise<produtos> {
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID do produto é obrigatório para atualização");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id);
    if (!existeProduto) {
      throw new AppError("Não existe um produto com esse id");
    }

    const existeCategoria =
      await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(
        id_categoriaProduto
      );
    if (!existeCategoria) {
      throw new AppError("Não existe uma categoria de produto com esse id");
    }

    const produtoComMesmoNome =
      await repositorioProduto.listarUmProdutoPeloNome(nomeProduto);
    if (produtoComMesmoNome && produtoComMesmoNome.id !== id) {
      throw new AppError("Já existe um produto com esse nome");
    }

    const result = await repositorioProduto.atualizarProduto({
      id,
      id_categoriaProduto,
      referenciaProduto,
      nomeProduto,

      custoAquisicao,
      precoVenda,
      quantidadeEstoque,
      unidadeMedida,
      codigoBarras,
      unidadeConteudo,
    });

    return result;
  }
}

export { AtualizarProdutoCasoDeUso };
