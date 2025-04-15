import {
  vendas,
  produtos,
  entradasEstoque,
  transferencias,
  funcionariosCaixa,
} from "@prisma/client";

export interface IRelatorioRepository {
  listarVendasPorPeriodo(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]>;
  listarVendasPorCliente(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]>;
  listarProdutosMaisVendidos(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeVendida: number;
      valorTotal: number;
    }[]
  >;
  listarFaturamentoPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
    totalFaturado: number;
    vendas: (vendas & { funcionarioNome: string })[];
  }>;
  listarQuantidadeFaturadaPorCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarios: string[];
    }[]
  >;
  listarEstoqueAtual(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeEstoque: number;
      localizacoes: { id: string; nome: string }[];
    }[]
  >;
  listarEntradasEstoquePorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(entradasEstoque & { funcionarioNome: string })[]>;
  listarTransferenciasPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(transferencias & { funcionarioNome: string })[]>;
  listarProdutosAbaixoMinimo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeAtual: number;
      quantidadeMinima: number;
      localizacao: string;
    }[]
  >;
  listarAtividadeFuncionariosCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(funcionariosCaixa & { funcionarioNome: string })[]>;
  listarPeriodoMaisVendidoPorProduto(
    idProduto: string,
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
    id_produto: string;
    nomeProduto: string;
    periodo: string;
    quantidadeVendida: number;
    valorTotal: number;
  }>;
}