import { produtosLocalizacoes } from "@prisma/client";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";

class ListarTodosProdutosLocalizacoesCasoDeUso {
  async execute(): Promise<produtosLocalizacoes[]> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();
    const result = await repositorioProdutoLocalizacao.listarTodosProdutosLocalizacoes();
    return result;
  }
}

export { ListarTodosProdutosLocalizacoesCasoDeUso };