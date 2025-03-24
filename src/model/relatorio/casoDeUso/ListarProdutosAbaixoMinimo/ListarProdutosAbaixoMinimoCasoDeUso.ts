import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarProdutosAbaixoMinimoCasoDeUso {
  async execute(): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeAtual: number;
      quantidadeMinima: number;
      localizacao: string;
    }[]
  > {
    const repositorio = new RelatorioRepository();
    const result = await repositorio.listarProdutosAbaixoMinimo();
    return result;
  }
}

export { ListarProdutosAbaixoMinimoCasoDeUso };
