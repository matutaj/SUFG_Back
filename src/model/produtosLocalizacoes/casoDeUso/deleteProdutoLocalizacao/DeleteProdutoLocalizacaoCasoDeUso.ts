import { produtosLocalizacoes } from "@prisma/client";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";

class DeleteProdutoLocalizacaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();

    if (!id) {
      throw new Error("O ID do produto-localização é obrigatório para exclusão");
    }

    const existeProdutoLocalizacao = await repositorioProdutoLocalizacao.listarUmProdutoLocalizacaoPorId(id);
    if (!existeProdutoLocalizacao) {
      throw new Error("Não existe um registro de produto-localização com esse id");
    }

    await repositorioProdutoLocalizacao.eliminarProdutoLocalizacao(id);
  }
}

export { DeleteProdutoLocalizacaoCasoDeUso };