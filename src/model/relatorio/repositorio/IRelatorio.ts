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
  ): Promise<(vendas & { funcionarioNome: string; nomeCaixa: string })[]>;
  listarVendasPorCliente(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string; nomeCaixa: string })[]>;
  listarProdutosMaisVendidos(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<
    {
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
    vendas: (vendas & { funcionarioNome: string; nomeCaixa: string })[];
  }>;
  listarQuantidadeFaturadaPorCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
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
      nomeProduto: string;
      quantidadeEstoque: number;
      localizacoes: { nome: string }[];
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
      nomeProduto: string;
      quantidadeAtual: number;
      quantidadeMinima: number;
      localizacao: string;
    }[]
  >;
  listarAtividadeFuncionariosCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    (funcionariosCaixa & { funcionarioNome: string; nomeCaixa: string })[]
  >;
  listarPeriodoMaisVendidoPorProduto(
    idProduto: string,
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
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
      nomeTarefa: string;
      descricao: string | null;
      funcionarios: { nome: string }[];
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
      dataValidade: Date;
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
      nomeProduto: string;
      quantidadeAtual: number;
      localizacoes: {
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
      nomeProduto: string;
      localizacao: {
        nome: string;
        seccao: string;
        corredor: string;
        prateleira: string;
        quantidade: number;
        quantidadeMinima: number;
      };
    }[]
  >;
  listarAtividadesDoDia(data: Date): Promise<
    {
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
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarios: { nome: string }[];
      vendas: (vendas & { clienteNome: string })[];
      horarioAbertura: Date;
      horarioFechamento: Date | null;
    }[]
  >;
}
