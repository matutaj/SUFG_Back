// src/repositorio/IRelatorio.ts
import {
  vendas,
  produtos,
  entradasEstoque,
  transferencias,
  funcionariosCaixa,
} from "@prisma/client";

export interface IRelatorioRepository {
  // Métodos existentes (mantidos como estão)
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
  listarAtividadesCaixas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarioNome: string;
      vendas: vendas[];
    }[]
  >;
  listarTarefas(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idTarefa: string;
      nomeTarefa: string;
      descricao: string | null;
      funcionarios: { id: string; nome: string }[];
    }[]
  >;
  listarRelatorioVendas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      numeroDocumento: string;
      dataEmissao: Date;
      valorTotal: number;
      cliente: {
        nomeCliente: string;
      };
      funcionarioCaixa: {
        nomeCaixa: string;
        quantidadaFaturada: number;
        funcionario: {
          nomeFuncionario: string;
        };
      };
      produtos: {
        nomeProduto: string;
        referenciaProduto: string;
        quantidadeVendida: number;
        precoVenda: number;
      }[];
    }[]
  >;
  listarRelatorioEstoque(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      idProduto: string;
      nomeProduto: string;
      quantidadeAtual: number;
      localizacoes: {
        id: string;
        nome: string;
        seccao: string;
        corredor: string;
        prateleira: string;
      }[];
    }[]
  >;
  listarRelatorioEntradasEstoque(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    (entradasEstoque & {
      funcionarioNome: string;
      fornecedorNome: string;
      produtoNome: string;
    })[]
  >;
  listarRelatorioProdutos(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idProduto: string;
      nomeProduto: string;
      precoVenda: number;
      quantidadePorUnidade: number;
      categoria: string;
    }[]
  >;
  listarRelatorioProdutoLocalizacao(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      idProduto: string;
      nomeProduto: string;
      localizacao: {
        id: string;
        nome: string;
        seccao: string;
        corredor: string;
        prateleira: string;
        quantidade: number;
        quantidadeMinima: number;
      };
    }[]
  >;

  // Novos métodos para os relatórios solicitados
  listarAtividadesDoDia(data: Date): Promise<
    {
      idTarefa: string;
      nomeTarefa: string;
      descricao: string | null;
      funcionarioNome: string;
      status: string;
      dataCriacao: Date;
    }[]
  >;
  listarRelatorioCaixas(
    idCaixa?: string,
    dataInicio?: Date,
    dataFim?: Date
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarios: { id: string; nome: string }[];
      vendas: (vendas & { clienteNome: string })[];
      horarioAbertura: Date;
      horarioFechamento: Date | null;
    }[]
  >;
}
