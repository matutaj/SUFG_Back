import { produtos } from "@prisma/client";
import { DadosProduto } from "../../repositorioProduto/IProduto";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { CategoriaProdutoRepositorio } from "../../../categoriaProdutos/repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
class AtualizarProdutoCasoDeUso {
  async execute({
    id,
    id_categoriaProduto,
    referenciaProduto,
    nomeProduto,
    descricaoProduto,
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
      throw new Error("O ID do produto é obrigatório para atualização");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    const existeCategoria = await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(id_categoriaProduto);
    if (!existeCategoria) {
      throw new Error("Não existe uma categoria de produto com esse id");
    }

    const produtoComMesmoNome = await repositorioProduto.listarUmProdutoPeloNome(nomeProduto);
    if (produtoComMesmoNome && produtoComMesmoNome.id !== id) {
      throw new Error("Já existe um produto com esse nome");
    }

    const result = await repositorioProduto.atualizarProduto({
      id,
      id_categoriaProduto,
      referenciaProduto,
      nomeProduto,
      descricaoProduto,
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
