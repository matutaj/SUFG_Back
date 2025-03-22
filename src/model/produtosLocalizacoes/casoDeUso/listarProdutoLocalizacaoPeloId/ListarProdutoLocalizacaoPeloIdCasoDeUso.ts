import { produtosLocalizacoes } from "@prisma/client";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";

class ListarUmProdutoLocalizacaoPorIdCasoDeUso {
  async execute(id: string): Promise<produtosLocalizacoes | undefined> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioProdutoLocalizacao.listarUmProdutoLocalizacaoPorId(id);
    return result;
  }
}

export { ListarUmProdutoLocalizacaoPorIdCasoDeUso };