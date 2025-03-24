import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarPeriodoMaisVendidoPorProdutoCasoDeUso {
  async execute(idProduto: string): Promise<{
    id_produto: string;
    nomeProduto: string;
    periodo: string;
    quantidadeVendida: number;
    valorTotal: number;
  }> {
    const repositorio = new RelatorioRepository();
    if (!idProduto) throw new Error("ID do produto é obrigatório");
    const result = await repositorio.listarPeriodoMaisVendidoPorProduto(
      idProduto
    );
    return result;
  }
}

export { ListarPeriodoMaisVendidoPorProdutoCasoDeUso };
