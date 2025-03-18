import {
  PrismaClient,
  vendas,
  produtos,
  entradasEstoque,
  transferencias,
  funcionariosCaixa,
} from "@prisma/client";
import { IRelatorioRepository } from "../IRelatorio";

export class RelatorioRepository implements IRelatorioRepository {
  private prisma = new PrismaClient();

  async listarVendasPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const vendas = await this.prisma.vendas.findMany({
      where: {
        dataEmissao: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        vendasProdutos: { include: { produtos: true } },
        clientes: true,
        funcionariosCaixa: { include: { Funcionarios: true } },
      },
    });

    return vendas.map((venda) => ({
      ...venda,
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ||
        "Desconhecido",
    }));
  }

  async listarVendasPorCliente(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const vendas = await this.prisma.vendas.findMany({
      where: {
        id_cliente: idCliente,
        dataEmissao: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        vendasProdutos: { include: { produtos: true } },
        funcionariosCaixa: { include: { Funcionarios: true } },
      },
    });

    return vendas.map((venda) => ({
      ...venda,
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ||
        "Desconhecido",
    }));
  }

  async listarProdutosMaisVendidos(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeVendida: number;
      valorTotal: number;
    }[]
  > {
    const result = await this.prisma.vendasProdutos.groupBy({
      by: ["id_produto"],
      _sum: { quantidadeVendida: true },
      where: {
        vendas: {
          dataEmissao: {
            gte: dataInicio,
            lte: dataFim,
          },
        },
      },
      orderBy: {
        _sum: { quantidadeVendida: "desc" },
      },
    });

    const produtosVendidos = await Promise.all(
      result.map(async (item) => {
        const produto = await this.prisma.produtos.findUnique({
          where: { id: item.id_produto },
          select: { nomeProduto: true, precoVenda: true },
        });
        return {
          id_produto: item.id_produto,
          nomeProduto: produto?.nomeProduto || "Desconhecido",
          quantidadeVendida: item._sum.quantidadeVendida || 0,
          valorTotal:
            (item._sum.quantidadeVendida || 0) *
            Number(produto?.precoVenda || 0),
        };
      })
    );

    return produtosVendidos;
  }

  async listarFaturamentoPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
    totalFaturado: number;
    vendas: (vendas & { funcionarioNome: string })[];
  }> {
    const vendas = await this.listarVendasPorPeriodo(dataInicio, dataFim);
    const totalFaturado = vendas.reduce(
      (acc, venda) => acc + Number(venda.valorTotal),
      0
    );
    return { totalFaturado, vendas };
  }

  async listarQuantidadeFaturadaPorCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idCaixa: string;
      nomeCaixa: string;
      quantidadaFaturada: number;
      funcionarioNome: string;
    }[]
  > {
    const result = await this.prisma.funcionariosCaixa.findMany({
      where: {
        horarioAbertura: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        caixas: true,
        Funcionarios: true,
      },
    });

    const grouped = result.reduce((acc, item) => {
      const key = item.id_caixa;
      if (!acc[key]) {
        acc[key] = {
          idCaixa: item.id_caixa,
          nomeCaixa: item.caixas.nomeCaixa,
          quantidadaFaturada: 0,
          funcionarioNome: item.Funcionarios.nomeFuncionario || "Desconhecido",
        };
      }
      acc[key].quantidadaFaturada += Number(item.quantidadaFaturada || 0);
      return acc;
    }, {} as Record<string, { idCaixa: string; nomeCaixa: string; quantidadaFaturada: number; funcionarioNome: string }>);

    return Object.values(grouped);
  }

  async listarEstoqueAtual(): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeEstoque: number;
      localProduto: string;
    }[]
  > {
    const produtos = await this.prisma.produtos.findMany({
      select: {
        id: true,
        nomeProduto: true,
        quantidadeEstoque: true,
        produtosLocalizacoes: {
          include: { Localizacoes: { select: { localProduto: true } } },
        },
      },
    });

    return produtos.map((produto) => ({
      id_produto: produto.id,
      nomeProduto: produto.nomeProduto,
      quantidadeEstoque: produto.quantidadeEstoque,
      localProduto:
        produto.produtosLocalizacoes[0]?.Localizacoes.localProduto ||
        "Desconhecido",
    }));
  }

  async listarEntradasEstoquePorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(entradasEstoque & { funcionarioNome: string })[]> {
    const entradas = await this.prisma.entradasEstoque.findMany({
      where: {
        dataEntrada: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        Produtos: true,
        Fornecedores: true,
        funcionarios: true,
      },
    });

    return entradas.map((entrada) => ({
      ...entrada,
      funcionarioNome: entrada.funcionarios?.nomeFuncionario || "Desconhecido",
    }));
  }

  async listarTransferenciasPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(transferencias & { funcionarioNome: string })[]> {
    const transferencias = await this.prisma.transferencias.findMany({
      where: {
        dataTransferencia: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        Produtos: true,
        Localizacoes: true,
        funcionarios: true,
      },
    });

    return transferencias.map((transferencia) => ({
      ...transferencia,
      funcionarioNome:
        transferencia.funcionarios?.nomeFuncionario || "Desconhecido",
    }));
  }

  async listarProdutosAbaixoMinimo(): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeAtual: number;
      quantidadeMinima: number;
    }[]
  > {
    const localizacoes = await this.prisma.produtosLocalizacoes.findMany({
      where: {
        quantidadeProduto: {
          lt: this.prisma.produtosLocalizacoes.fields.quantidadeMinimaProduto,
        },
      },
      include: {
        produtos: { select: { nomeProduto: true } },
      },
    });

    return localizacoes.map((loc) => ({
      id_produto: loc.id_produto,
      nomeProduto: loc.produtos.nomeProduto,
      quantidadeAtual: loc.quantidadeProduto,
      quantidadeMinima: loc.quantidadeMinimaProduto,
    }));
  }

  async listarAtividadeFuncionariosCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(funcionariosCaixa & { funcionarioNome: string })[]> {
    const atividades = await this.prisma.funcionariosCaixa.findMany({
      where: {
        horarioAbertura: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      include: {
        caixas: true,
        Funcionarios: true,
      },
    });

    return atividades.map((atividade) => ({
      ...atividade,
      funcionarioNome:
        atividade.Funcionarios?.nomeFuncionario || "Desconhecido",
    }));
  }
}
