// src/casos-de-uso/ListarEstoqueAtualCasoDeUso.ts
import { RelatorioRepository } from "../../repositorio/implementacoes/RelatorioRepositorio";

class ListarEstoqueAtualCasoDeUso {
  async execute(): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeEstoque: number;
      localizacoes: { id: string; nome: string }[];
    }[]
  > {
    const repositorio = new RelatorioRepository();
    const result = await repositorio.listarEstoqueAtual();
    return result;
  }
}

export { ListarEstoqueAtualCasoDeUso };
