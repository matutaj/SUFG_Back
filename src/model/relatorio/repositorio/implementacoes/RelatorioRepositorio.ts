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
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const vendas = await this.prisma.vendas.findMany({
      where: { dataEmissao: { gte: dataInicio, lte: dataFim } },
      include: {
        vendasProdutos: { include: { produtos: true } },
        clientes: true,
        funcionariosCaixa: { include: { Funcionarios: true } },
      },
      orderBy: { dataEmissao: "asc" },
      take: limite,
    });

    return vendas.map((venda) => ({
      ...venda,
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
        "Desconhecido",
    }));
  }

  async listarVendasPorCliente(
    idCliente: string,
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const vendas = await this.prisma.vendas.findMany({
      where: {
        id_cliente: idCliente,
        dataEmissao: { gte: dataInicio, lte: dataFim },
      },
      include: {
        vendasProdutos: { include: { produtos: true } },
        funcionariosCaixa: { include: { Funcionarios: true } },
      },
      orderBy: { dataEmissao: "asc" },
      take: limite,
    });

    return vendas.map((venda) => ({
      ...venda,
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
        "Desconhecido",
    }));
  }

  async listarProdutosMaisVendidos(
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
  > {
    const vendasProdutos = await this.prisma.vendasProdutos.findMany({
      where: { vendas: { dataEmissao: { gte: dataInicio, lte: dataFim } } },
      include: {
        produtos: { select: { nomeProduto: true, precoVenda: true } },
      },
    });

    const aggregated = vendasProdutos.reduce((acc, item) => {
      const key = item.id_produto;
      if (!acc[key]) {
        acc[key] = {
          id_produto: key,
          nomeProduto: item.produtos.nomeProduto,
          quantidadeVendida: 0,
          valorTotal: 0,
        };
      }
      acc[key].quantidadeVendida += item.quantidadeVendida;
      acc[key].valorTotal +=
        item.quantidadeVendida * Number(item.produtos.precoVenda);
      return acc;
    }, {} as Record<string, { id_produto: string; nomeProduto: string; quantidadeVendida: number; valorTotal: number }>);

    const result = Object.values(aggregated).sort(
      (a, b) => b.quantidadeVendida - a.quantidadeVendida
    );
    return limite ? result.slice(0, limite) : result;
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
      quantidadeFaturada: number;
      funcionarios: string[];
    }[]
  > {
    const caixasAtivos = await this.prisma.funcionariosCaixa.findMany({
      where: { horarioAbertura: { gte: dataInicio, lte: dataFim } },
      include: { caixas: true, Funcionarios: true },
    });

    const grouped = caixasAtivos.reduce((acc, item) => {
      const key = item.id_caixa;
      if (!acc[key]) {
        acc[key] = {
          idCaixa: item.id_caixa,
          nomeCaixa: item.caixas.nomeCaixa,
          quantidadeFaturada: 0,
          funcionarios: new Set<string>(),
        };
      }
      acc[key].quantidadeFaturada += Number(item.quantidadaFaturada || 0);
      acc[key].funcionarios.add(
        item.Funcionarios?.nomeFuncionario ?? "Desconhecido"
      );
      return acc;
    }, {} as Record<string, { idCaixa: string; nomeCaixa: string; quantidadeFaturada: number; funcionarios: Set<string> }>);

    return Object.values(grouped).map((item) => ({
      ...item,
      funcionarios: Array.from(item.funcionarios),
    }));
  }

  async listarEstoqueAtual(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      id_produto: string;
      nomeProduto: string;
      quantidadeEstoque: number;
      localizacoes: { id: string; nome: string }[];
    }[]
  > {
    const produtos = await this.prisma.produtos.findMany({
      where: { updatedAt: { gte: dataInicio, lte: dataFim } },
      select: {
        id: true,
        nomeProduto: true,
        quantidadePorUnidade: true,
        produtosLocalizacoes: {
          include: {
            Localizacoes: { select: { id: true, nomeLocalizacao: true } },
          },
        },
      },
    });

    return produtos.map((produto) => ({
      id_produto: produto.id,
      nomeProduto: produto.nomeProduto,
      quantidadeEstoque: produto.quantidadePorUnidade,
      localizacoes: produto.produtosLocalizacoes.map((loc) => ({
        id: loc.Localizacoes.id,
        nome: loc.Localizacoes.nomeLocalizacao,
      })),
    }));
  }

  async listarEntradasEstoquePorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(entradasEstoque & { funcionarioNome: string })[]> {
    const entradas = await this.prisma.entradasEstoque.findMany({
      where: { dataEntrada: { gte: dataInicio, lte: dataFim } },
      include: { Produtos: true, Fornecedores: true, funcionarios: true },
    });

    return entradas.map((entrada) => ({
      ...entrada,
      funcionarioNome: entrada.funcionarios?.nomeFuncionario ?? "Desconhecido",
    }));
  }

  async listarTransferenciasPorPeriodo(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(transferencias & { funcionarioNome: string })[]> {
    const transferencias = await this.prisma.transferencias.findMany({
      where: { dataTransferencia: { gte: dataInicio, lte: dataFim } },
      include: { Produtos: true, Localizacoes: true, funcionarios: true },
    });

    return transferencias.map((transferencia) => ({
      ...transferencia,
      funcionarioNome:
        transferencia.funcionarios?.nomeFuncionario ?? "Desconhecido",
    }));
  }

  async listarProdutosAbaixoMinimo(
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
  > {
    const localizacoes = await this.prisma.produtosLocalizacoes.findMany({
      where: { updatedAt: { gte: dataInicio, lte: dataFim } },
      include: {
        produtos: { select: { nomeProduto: true } },
        Localizacoes: { select: { nomeLocalizacao: true } },
      },
    });

    const abaixoMinimo = localizacoes.filter(
      (loc) => loc.quantidadeProduto < loc.quantidadeMinimaProduto
    );

    return abaixoMinimo.map((loc) => ({
      id_produto: loc.id_produto,
      nomeProduto: loc.produtos.nomeProduto,
      quantidadeAtual: loc.quantidadeProduto,
      quantidadeMinima: loc.quantidadeMinimaProduto,
      localizacao: loc.Localizacoes.nomeLocalizacao,
    }));
  }

  async listarAtividadeFuncionariosCaixa(
    dataInicio: Date,
    dataFim: Date
  ): Promise<(funcionariosCaixa & { funcionarioNome: string })[]> {
    const atividades = await this.prisma.funcionariosCaixa.findMany({
      where: { horarioAbertura: { gte: dataInicio, lte: dataFim } },
      include: { caixas: true, Funcionarios: true },
    });

    return atividades.map((atividade) => ({
      ...atividade,
      funcionarioNome:
        atividade.Funcionarios?.nomeFuncionario ?? "Desconhecido",
    }));
  }

  async listarPeriodoMaisVendidoPorProduto(idProduto: string): Promise<{
    id_produto: string;
    nomeProduto: string;
    periodo: string;
    quantidadeVendida: number;
    valorTotal: number;
  }> {
    const produto = await this.prisma.produtos.findUnique({
      where: { id: idProduto },
      select: { nomeProduto: true, precoVenda: true },
    });

    if (!produto) {
      throw new Error(`Produto com ID ${idProduto} não encontrado`);
    }

    const vendasProdutos = await this.prisma.vendasProdutos.findMany({
      where: { id_produto: idProduto },
      include: { vendas: { select: { dataEmissao: true } } },
    });

    if (!vendasProdutos.length) {
      return {
        id_produto: idProduto,
        nomeProduto: produto.nomeProduto,
        periodo: "Nenhum dado disponível",
        quantidadeVendida: 0,
        valorTotal: 0,
      };
    }

    const aggregated = vendasProdutos.reduce((acc, item) => {
      const date = new Date(item.vendas.dataEmissao);
      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      if (!acc[key]) {
        acc[key] = { quantidadeVendida: 0, valorTotal: 0 };
      }
      acc[key].quantidadeVendida += item.quantidadeVendida;
      acc[key].valorTotal +=
        item.quantidadeVendida * Number(produto.precoVenda);
      return acc;
    }, {} as Record<string, { quantidadeVendida: number; valorTotal: number }>);

    const maisVendido = Object.entries(aggregated).reduce(
      (max, [periodo, data]) =>
        data.quantidadeVendida > (max.data?.quantidadeVendida || 0)
          ? { periodo, data }
          : max,
      { periodo: "", data: null } as {
        periodo: string;
        data: { quantidadeVendida: number; valorTotal: number } | null;
      }
    );

    const [ano, mes] = maisVendido.periodo.split("-").map(Number);
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const periodo = `${meses[mes - 1]} ${ano}`;

    return {
      id_produto: idProduto,
      nomeProduto: produto.nomeProduto,
      periodo,
      quantidadeVendida: maisVendido.data?.quantidadeVendida || 0,
      valorTotal: maisVendido.data?.valorTotal || 0,
    };
  }
}