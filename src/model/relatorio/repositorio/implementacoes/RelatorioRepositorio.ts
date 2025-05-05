import {
  PrismaClient,
  vendas,
  produtos,
  entradasEstoque,
  transferencias,
  funcionariosCaixa,
} from "@prisma/client";
import { IRelatorioRepository } from "../IRelatorio";
import prisma from "../../../../prisma/client";
export class RelatorioRepository implements IRelatorioRepository {
  // Métodos existentes (mantidos como estão)
  async listarVendasPorPeriodo(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<(vendas & { funcionarioNome: string })[]> {
    const vendas = await prisma.vendas.findMany({
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
    const vendas = await prisma.vendas.findMany({
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
    const vendasProdutos = await prisma.vendasProdutos.findMany({
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
    const caixasAtivos = await prisma.funcionariosCaixa.findMany({
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
    const produtos = await prisma.produtos.findMany({
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
    const entradas = await prisma.entradasEstoque.findMany({
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
    const transferencias = await prisma.transferencias.findMany({
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
    const localizacoes = await prisma.produtosLocalizacoes.findMany({
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
    const atividades = await prisma.funcionariosCaixa.findMany({
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
    const produto = await prisma.produtos.findUnique({
      where: { id: idProduto },
      select: { nomeProduto: true, precoVenda: true },
    });

    if (!produto) {
      throw new Error(`Produto com ID ${idProduto} não encontrado`);
    }

    const vendasProdutos = await prisma.vendasProdutos.findMany({
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
    const caixasAtivos = await prisma.funcionariosCaixa.findMany({
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
    const tarefas = await prisma.tarefas.findMany({
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
  > {
    // Validação de datas
    if (!(dataInicio instanceof Date) || !(dataFim instanceof Date)) {
      throw new Error("Datas devem ser instâncias de Date");
    }

    const where: any = {
      dataEmissao: {
        gte: dataInicio,
        lte: dataFim,
      },
    };

    if (idProduto) {
      where.vendasProdutos = { some: { id_produto: idProduto } };
    }

    const vendas = await prisma.vendas.findMany({
      where,
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

    return vendas.map((venda: any) => ({
      numeroDocumento: venda.numeroDocumento,
      dataEmissao: venda.dataEmissao,
      dataValidade: venda.dataValidade,
      valorTotal: Number(venda.valorTotal),
      cliente: {
        nomeCliente: venda.clientes?.nomeCliente ?? "Desconhecido",
      },
      funcionarioCaixa: {
        nomeCaixa: venda.funcionariosCaixa?.caixas?.nomeCaixa ?? "Desconhecido",
        quantidadaFaturada: Number(
          venda.funcionariosCaixa?.quantidadaFaturada ?? 0
        ),
        funcionario: {
          nomeFuncionario:
            venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
            "Desconhecido",
        },
      },
      produtos: venda.vendasProdutos.map((vp: any) => ({
        nomeProduto: vp.produtos.nomeProduto,
        referenciaProduto: vp.produtos.referenciaProduto ?? "-",
        quantidadeVendida: vp.quantidadeVendida,
        precoVenda: Number(vp.produtos.precoVenda),
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
    const produtos = await prisma.produtos.findMany({
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
    const entradas = await prisma.entradasEstoque.findMany({
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
    const produtos = await prisma.produtos.findMany({
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
    const localizacoes = await prisma.produtosLocalizacoes.findMany({
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
  async listarAtividadesDoDia(data: Date): Promise<
    {
      idTarefa: string;
      nomeTarefa: string;
      descricao: string | null;
      funcionarioNome: string;
      status: string;
      dataCriacao: Date;
    }[]
  > {
    // Normaliza a data para incluir o dia inteiro
    const startOfDay = new Date(data.setHours(0, 0, 0, 0));
    const endOfDay = new Date(data.setHours(23, 59, 59, 999));

    const atividades = await prisma.funcionariosTarefas.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        tarefas: {
          select: {
            id: true,
            nome: true,
            descricao: true,
          },
        },
        funcionarios: {
          select: {
            nomeFuncionario: true,
          },
        },
      },
    });

    return atividades.map((atividade) => ({
      idTarefa: atividade.tarefas.id,
      nomeTarefa: atividade.tarefas.nome,
      descricao: atividade.tarefas.descricao,
      funcionarioNome:
        atividade.funcionarios?.nomeFuncionario ?? "Desconhecido",
      status: atividade.status,
      dataCriacao: atividade.createdAt,
    }));
  }

  async listarRelatorioCaixas(
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
  > {
    const whereClause: any = {};
    if (idCaixa) {
      whereClause.id_caixa = idCaixa;
    }
    if (dataInicio && dataFim) {
      whereClause.horarioAbertura = {
        gte: dataInicio,
        lte: dataFim,
      };
    }

    const caixasAtivos = await prisma.funcionariosCaixa.findMany({
      where: whereClause,
      include: {
        caixas: {
          select: {
            id: true,
            nomeCaixa: true,
          },
        },
        Funcionarios: {
          select: {
            id: true,
            nomeFuncionario: true,
          },
        },
        vendas: {
          include: {
            vendasProdutos: {
              include: {
                produtos: true,
              },
            },
            clientes: {
              select: {
                nomeCliente: true,
              },
            },
          },
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
          funcionarios: new Set<{ id: string; nome: string }>(),
          vendas: [],
          horarioAbertura: item.horarioAbertura,
          horarioFechamento: item.horarioFechamento,
        };
      }
      acc[key].quantidadeFaturada += Number(item.quantidadaFaturada || 0);
      acc[key].funcionarios.add({
        id: item.Funcionarios.id,
        nome: item.Funcionarios?.nomeFuncionario ?? "Desconhecido",
      });
      acc[key].vendas.push(
        ...item.vendas.map((venda) => ({
          ...venda,
          clienteNome: venda.clientes?.nomeCliente ?? "Desconhecido",
        }))
      );
      return acc;
    }, {} as Record<string, { idCaixa: string; nomeCaixa: string; quantidadeFaturada: number; funcionarios: Set<{ id: string; nome: string }>; vendas: (vendas & { clienteNome: string })[]; horarioAbertura: Date; horarioFechamento: Date | null }>);

    return Object.values(grouped).map((item) => ({
      ...item,
      funcionarios: Array.from(item.funcionarios),
    }));
  }
}
