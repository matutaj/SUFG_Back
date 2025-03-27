import { produtosLocalizacoes } from "@prisma/client";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";
import { AppError } from "../../../../errors/AppError";

class DeleteProdutoLocalizacaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();

    if (!id) {
      throw new AppError("O ID do produto-localização é obrigatório para exclusão");
    }

    const existeProdutoLocalizacao = await repositorioProdutoLocalizacao.listarUmProdutoLocalizacaoPorId(id);
    if (!existeProdutoLocalizacao) {
      throw new AppError("Não existe um registro de produto-localização com esse id");
    }

    await repositorioProdutoLocalizacao.eliminarProdutoLocalizacao(id);
  }
}

export { DeleteProdutoLocalizacaoCasoDeUso };