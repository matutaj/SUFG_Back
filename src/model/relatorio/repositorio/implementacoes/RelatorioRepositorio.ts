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

  // Métodos existentes (mantidos como estão)
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

  async listarPeriodoMaisVendidoPorProduto(
    idProduto: string,
    dataInicio: Date,
    dataFim: Date
  ): Promise<{
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
      where: {
        id_produto: idProduto,
        vendas: { dataEmissao: { gte: dataInicio, lte: dataFim } },
      },
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

  // Novos métodos para os relatórios solicitados
  async listarAtividadesCaixas(
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
  > {
    const caixasAtivos = await this.prisma.funcionariosCaixa.findMany({
      where: { horarioAbertura: { gte: dataInicio, lte: dataFim } },
      include: {
        caixas: true,
        Funcionarios: true,
        vendas: {
          where: idProduto
            ? {
                vendasProdutos: { some: { id_produto: idProduto } },
                dataEmissao: { gte: dataInicio, lte: dataFim },
              }
            : { dataEmissao: { gte: dataInicio, lte: dataFim } },
          include: { vendasProdutos: { include: { produtos: true } } },
        },
      },
    });

    const grouped = caixasAtivos.reduce((acc, item) => {
      const key = item.id_caixa;
      if (!acc[key]) {
        acc[key] = {
          idCaixa: item.id_caixa,
          nomeCaixa: item.caixas.nomeCaixa,
          quantidadeFaturada: 0,
          funcionarioNome: item.Funcionarios?.nomeFuncionario ?? "Desconhecido",
          vendas: [],
        };
      }
      acc[key].quantidadeFaturada += Number(item.quantidadaFaturada || 0);
      acc[key].vendas.push(...item.vendas);
      return acc;
    }, {} as Record<string, { idCaixa: string; nomeCaixa: string; quantidadeFaturada: number; funcionarioNome: string; vendas: vendas[] }>);

    return Object.values(grouped);
  }

  async listarTarefas(
    dataInicio: Date,
    dataFim: Date
  ): Promise<
    {
      idTarefa: string;
      nomeTarefa: string;
      descricao: string | null;
      funcionarios: { id: string; nome: string }[];
    }[]
  > {
    const tarefas = await this.prisma.tarefas.findMany({
      where: { updatedAt: { gte: dataInicio, lte: dataFim } },
      include: {
        funcionariosTarefas: {
          include: {
            funcionarios: { select: { id: true, nomeFuncionario: true } },
          },
        },
      },
    });

    return tarefas.map((tarefa) => ({
      idTarefa: tarefa.id,
      nomeTarefa: tarefa.nome,
      descricao: tarefa.descricao,
      funcionarios: tarefa.funcionariosTarefas.map((ft) => ({
        id: ft.funcionarios.id,
        nome: ft.funcionarios.nomeFuncionario,
      })),
    }));
  }

  async listarRelatorioVendas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      idVenda: string;
      numeroDocumento: string;
      dataEmissao: Date;
      valorTotal: number;
      clienteNome: string;
      funcionarioNome: string;
      produtos: { id: string; nome: string; quantidade: number }[];
    }[]
  > {
    const vendas = await this.prisma.vendas.findMany({
      where: idProduto
        ? {
            vendasProdutos: { some: { id_produto: idProduto } },
            dataEmissao: { gte: dataInicio, lte: dataFim },
          }
        : { dataEmissao: { gte: dataInicio, lte: dataFim } },
      include: {
        clientes: { select: { nomeCliente: true } },
        funcionariosCaixa: {
          include: { Funcionarios: { select: { nomeFuncionario: true } } },
        },
        vendasProdutos: {
          include: { produtos: { select: { id: true, nomeProduto: true } } },
        },
      },
    });

    return vendas.map((venda) => ({
      idVenda: venda.id,
      numeroDocumento: venda.numeroDocumento,
      dataEmissao: venda.dataEmissao,
      valorTotal: Number(venda.valorTotal),
      clienteNome: venda.clientes?.nomeCliente ?? "Desconhecido",
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
        "Desconhecido",
      produtos: venda.vendasProdutos.map((vp) => ({
        id: vp.produtos.id,
        nome: vp.produtos.nomeProduto,
        quantidade: vp.quantidadeVendida,
      })),
    }));
  }

  async listarRelatorioEstoque(
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
  > {
    const produtos = await this.prisma.produtos.findMany({
      where: idProduto
        ? { id: idProduto, updatedAt: { gte: dataInicio, lte: dataFim } }
        : { updatedAt: { gte: dataInicio, lte: dataFim } },
      include: {
        estoques: { select: { quantidadeAtual: true } },
        produtosLocalizacoes: {
          include: {
            Localizacoes: { select: { id: true, nomeLocalizacao: true } },
            seccoes: { select: { nomeSeccao: true } },
            corredores: { select: { nomeCorredor: true } },
            prateleiras: { select: { nomePrateleira: true } },
          },
        },
      },
    });

    return produtos.map((produto) => ({
      idProduto: produto.id,
      nomeProduto: produto.nomeProduto,
      quantidadeAtual: produto.estoques.reduce(
        (sum, estoque) => sum + estoque.quantidadeAtual,
        0
      ),
      localizacoes: produto.produtosLocalizacoes.map((loc) => ({
        id: loc.Localizacoes.id,
        nome: loc.Localizacoes.nomeLocalizacao,
        seccao: loc.seccoes.nomeSeccao,
        corredor: loc.corredores.nomeCorredor,
        prateleira: loc.prateleiras.nomePrateleira,
      })),
    }));
  }

  async listarRelatorioEntradasEstoque(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    (entradasEstoque & {
      funcionarioNome: string;
      fornecedorNome: string;
      produtoNome: string;
    })[]
  > {
    const entradas = await this.prisma.entradasEstoque.findMany({
      where: idProduto
        ? {
            id_produto: idProduto,
            dataEntrada: { gte: dataInicio, lte: dataFim },
          }
        : { dataEntrada: { gte: dataInicio, lte: dataFim } },
      include: {
        funcionarios: { select: { nomeFuncionario: true } },
        Fornecedores: { select: { nomeFornecedor: true } },
        Produtos: { select: { nomeProduto: true } },
      },
    });

    return entradas.map((entrada) => ({
      ...entrada,
      funcionarioNome: entrada.funcionarios?.nomeFuncionario ?? "Desconhecido",
      fornecedorNome: entrada.Fornecedores?.nomeFornecedor ?? "Desconhecido",
      produtoNome: entrada.Produtos?.nomeProduto ?? "Desconhecido",
    }));
  }

  async listarRelatorioProdutos(
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
  > {
    const produtos = await this.prisma.produtos.findMany({
      where: { updatedAt: { gte: dataInicio, lte: dataFim } },
      include: {
        categoriasProdutos: { select: { nomeCategoria: true } },
      },
    });

    return produtos.map((produto) => ({
      idProduto: produto.id,
      nomeProduto: produto.nomeProduto,
      precoVenda: Number(produto.precoVenda),
      quantidadePorUnidade: produto.quantidadePorUnidade,
      categoria: produto.categoriasProdutos.nomeCategoria,
    }));
  }

  async listarRelatorioProdutoLocalizacao(
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
  > {
    const localizacoes = await this.prisma.produtosLocalizacoes.findMany({
      where: idProduto
        ? {
            id_produto: idProduto,
            updatedAt: { gte: dataInicio, lte: dataFim },
          }
        : { updatedAt: { gte: dataInicio, lte: dataFim } },
      include: {
        produtos: { select: { id: true, nomeProduto: true } },
        Localizacoes: { select: { id: true, nomeLocalizacao: true } },
        seccoes: { select: { nomeSeccao: true } },
        corredores: { select: { nomeCorredor: true } },
        prateleiras: { select: { nomePrateleira: true } },
      },
    });

    return localizacoes.map((loc) => ({
      idProduto: loc.produtos.id,
      nomeProduto: loc.produtos.nomeProduto,
      localizacao: {
        id: loc.Localizacoes.id,
        nome: loc.Localizacoes.nomeLocalizacao,
        seccao: loc.seccoes.nomeSeccao,
        corredor: loc.corredores.nomeCorredor,
        prateleira: loc.prateleiras.nomePrateleira,
        quantidade: loc.quantidadeProduto,
        quantidadeMinima: loc.quantidadeMinimaProduto,
      },
    }));
  }
}
