import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarEstoqueAtualCasoDeUso {
  async execute(dataInicio: Date, dataFim: Date): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeEstoque: number;
      localizacoes: { id: string; nome: string }[];
    }[]
  > {
    const repositorio = new RelatorioRepository();
    const result = await repositorio.listarEstoqueAtual(dataInicio, dataFim);
    return result;
  }
}

export { ListarEstoqueAtualCasoDeUso };
