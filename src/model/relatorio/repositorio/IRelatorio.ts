export interface IRelatorioRepository {
  listarAtividadesCaixas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string,
    idCaixa?: string
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarioNome: string;
      vendas: {
        numeroDocumento: string;
        valorTotal: number;
        dataEmissao: Date;
        vendasProdutos: {
          produtos: { nomeProduto: string };
          quantidadeVendida: number;
        }[];
      }[];
    }[]
  >;
  listarFuncionarioMaisFaturado(
    dataInicio: Date,
    dataFim?: Date
  ): Promise<{
    funcionarioNome: string;
    totalFaturado: number;
    quantidadeVendas: number;
  }>;
  listarAtividadesDoDia(data: Date): Promise<
    {
      nomeTarefa: string;
      descricao: string | null;
      funcionarioNome: string;
      status: string;
      dataCriacao: Date;
    }[]
  >;
  listarEntradasEstoquePorPeriodo(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      produtoNome: string;
      quantidadeRecebida: number;
      dataEntrada: Date;
      fornecedorNome: string;
      funcionarioNome: string;
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
  listarRelatorioTransferencias(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      nomeProduto: string;
      quantidadeTransferida: number;
      dataTransferencia: Date;
      nomeLocalizacao: string;
      funcionarioNome: string;
    }[]
  >;
  listarFaturamentoPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
    totalFaturado: number;
    vendas: {
      nomeProduto: string;
      totalFaturado: number;
      dataEmissao: Date;
      funcionariosCaixa: string;
    }[];
  }>;
  listarRelatorioVendas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      numeroDocumento: string;
      dataEmissao: Date;
      valorTotal: number;
      cliente: { nomeCliente: string };
      funcionarioCaixa: {
        nomeCaixa: string;
        funcionario: { nomeFuncionario: string };
      };
      produtos: {
        nomeProduto: string;
        quantidadeVendida: number;
        precoVenda: number;
      }[];
    }[]
  >;
  listarVendasPorCliente(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      numeroDocumento: string;
      dataEmissao: Date;
      valorTotal: number;
      funcionarioNome: string;
      vendasProdutos: {
        produtos: { nomeProduto: string };
        quantidadeVendida: number;
      }[];
    }[]
  >;
}
