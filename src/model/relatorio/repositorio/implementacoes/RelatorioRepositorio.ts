import { IRelatorioRepository } from "../IRelatorio";
import prisma from "../../../../prisma/client";

export class RelatorioRepository implements IRelatorioRepository {
  async listarAtividadesCaixas(
    dataInicio: Date,
    dataFim: Date,
    idProduto?: string
  ): Promise<
    {
      nomeCaixa: string;
      quantidadeFaturada: number;
      funcionarioNome: string;
      vendas: { numeroDocumento: string; valorTotal: number }[];
    }[]
  > {
    const where: any = { horarioAbertura: { gte: dataInicio, lte: dataFim } };
    if (idProduto) {
      where.vendas = {
        some: { vendasProdutos: { some: { id_produto: idProduto } } },
      };
    }

    const caixasAtivos = await prisma.funcionariosCaixa.findMany({
      where,
      include: {
        caixas: { select: { nomeCaixa: true } },
        Funcionarios: { select: { nomeFuncionario: true } },
        vendas: {
          select: { numeroDocumento: true, valorTotal: true },
          where: { dataEmissao: { gte: dataInicio, lte: dataFim } },
        },
      },
    });

    const grouped = caixasAtivos.reduce((acc, item) => {
      const key = item.id_caixa;
      if (!acc[key]) {
        acc[key] = {
          nomeCaixa: item.caixas.nomeCaixa,
          quantidadeFaturada: 0,
          funcionarioNome: item.Funcionarios?.nomeFuncionario ?? "Desconhecido",
          vendas: [],
        };
      }
      acc[key].quantidadeFaturada += Number(item.quantidadaFaturada || 0);
      acc[key].vendas.push(
        ...item.vendas.map((venda) => ({
          numeroDocumento: venda.numeroDocumento,
          valorTotal: Number(venda.valorTotal),
        }))
      );
      return acc;
    }, {} as Record<string, { nomeCaixa: string; quantidadeFaturada: number; funcionarioNome: string; vendas: { numeroDocumento: string; valorTotal: number }[] }>);

    return Object.values(grouped);
  }

  async listarAtividadesDoDia(data: Date): Promise<
    {
      nomeTarefa: string;
      descricao: string | null;
      funcionarioNome: string;
      status: string;
      dataCriacao: Date;
    }[]
  > {
    const startOfDay = new Date(data.setHours(0, 0, 0, 0));
    const endOfDay = new Date(data.setHours(23, 59, 59, 999));

    const atividades = await prisma.funcionariosTarefas.findMany({
      where: { createdAt: { gte: startOfDay, lte: endOfDay } },
      include: {
        tarefas: { select: { nome: true, descricao: true } },
        funcionarios: { select: { nomeFuncionario: true } },
      },
    });

    return atividades.map((atividade) => ({
      nomeTarefa: atividade.tarefas.nome,
      descricao: atividade.tarefas.descricao,
      funcionarioNome:
        atividade.funcionarios?.nomeFuncionario ?? "Desconhecido",
      status: atividade.status,
      dataCriacao: atividade.createdAt,
    }));
  }

  async listarEntradasEstoquePorPeriodo(
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
  > {
    const where: any = { dataEntrada: { gte: dataInicio, lte: dataFim } };
    if (idProduto) {
      where.id_produto = idProduto;
    }

    const entradas = await prisma.entradasEstoque.findMany({
      where,
      include: {
        Produtos: { select: { nomeProduto: true } },
        Fornecedores: { select: { nomeFornecedor: true } },
        funcionarios: { select: { nomeFuncionario: true } },
      },
    });

    return entradas.map((entrada) => ({
      produtoNome: entrada.Produtos?.nomeProduto ?? "Desconhecido",
      quantidadeRecebida: entrada.quantidadeRecebida,
      dataEntrada: entrada.dataEntrada,
      fornecedorNome: entrada.Fornecedores?.nomeFornecedor ?? "Desconhecido",
      funcionarioNome: entrada.funcionarios?.nomeFuncionario ?? "Desconhecido",
    }));
  }

  async listarRelatorioEstoque(
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
  > {
    const where: any = {
      updatedAt: { gte: dataInicio, lte: dataFim },
      estoques: { some: { quantidadeAtual: { gt: 0 } } },
    };
    if (idProduto) {
      where.id = idProduto;
    }

    const produtos = await prisma.produtos.findMany({
      where,
      include: {
        estoques: { select: { quantidadeAtual: true } },
        produtosLocalizacoes: {
          include: {
            Localizacoes: { select: { nomeLocalizacao: true } },
            seccoes: { select: { nomeSeccao: true } },
            corredores: { select: { nomeCorredor: true } },
            prateleiras: { select: { nomePrateleira: true } },
          },
        },
      },
    });

    return produtos.map((produto) => ({
      nomeProduto: produto.nomeProduto,
      quantidadeAtual: produto.estoques.reduce(
        (sum, estoque) => sum + estoque.quantidadeAtual,
        0
      ),
      localizacoes: produto.produtosLocalizacoes.map((loc) => ({
        nome: loc.Localizacoes.nomeLocalizacao,
        seccao: loc.seccoes.nomeSeccao,
        corredor: loc.corredores.nomeCorredor,
        prateleira: loc.prateleiras.nomePrateleira,
      })),
    }));
  }

  async listarRelatorioProdutoLocalizacao(
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
  > {
    const where: any = { updatedAt: { gte: dataInicio, lte: dataFim } };
    if (idProduto) {
      where.id_produto = idProduto;
    }

    const localizacoes = await prisma.produtosLocalizacoes.findMany({
      where,
      include: {
        produtos: { select: { nomeProduto: true } },
        Localizacoes: { select: { nomeLocalizacao: true } },
        seccoes: { select: { nomeSeccao: true } },
        corredores: { select: { nomeCorredor: true } },
        prateleiras: { select: { nomePrateleira: true } },
      },
    });

    return localizacoes.map((loc) => ({
      nomeProduto: loc.produtos.nomeProduto,
      localizacao: {
        nome: loc.Localizacoes.nomeLocalizacao,
        seccao: loc.seccoes.nomeSeccao,
        corredor: loc.corredores.nomeCorredor,
        prateleira: loc.prateleiras.nomePrateleira,
        quantidade: loc.quantidadeProduto,
        quantidadeMinima: loc.quantidadeMinimaProduto,
      },
    }));
  }

  async listarProdutosMaisVendidos(
    dataInicio: Date,
    dataFim: Date,
    limite?: number
  ): Promise<
    {
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
          nomeProduto: item.produtos.nomeProduto,
          quantidadeVendida: 0,
          valorTotal: 0,
        };
      }
      acc[key].quantidadeVendida += item.quantidadeVendida;
      acc[key].valorTotal +=
        item.quantidadeVendida * Number(item.produtos.precoVenda);
      return acc;
    }, {} as Record<string, { nomeProduto: string; quantidadeVendida: number; valorTotal: number }>);

    const result = Object.values(aggregated).sort(
      (a, b) => b.quantidadeVendida - a.quantidadeVendida
    );
    return limite ? result.slice(0, limite) : result;
  }

  async listarRelatorioTransferencias(
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
  > {
    const transferencias = await prisma.transferencias.findMany({
      where: { dataTransferencia: { gte: dataInicio, lte: dataFim } },
      include: {
        Produtos: { select: { nomeProduto: true } },
        produtosLocalizacoes: {
          include: {
            Localizacoes: { select: { nomeLocalizacao: true } },
            seccoes: { select: { nomeSeccao: true } },
            corredores: { select: { nomeCorredor: true } },
            prateleiras: { select: { nomePrateleira: true } },
          },
        },
        funcionarios: { select: { nomeFuncionario: true } },
      },
    });

    return transferencias.map((transferencia) => ({
      nomeProduto: transferencia.Produtos?.nomeProduto ?? "Desconhecido",
      quantidadeTransferida: transferencia.quantidadeTransferida,
      dataTransferencia: transferencia.dataTransferencia,
      nomeLocalizacao:
        transferencia.produtosLocalizacoes?.Localizacoes?.nomeLocalizacao ??
        "Desconhecido",
      corredor:
        transferencia.produtosLocalizacoes?.corredores?.nomeCorredor ??
        "Desconhecido",
      prateleira:
        transferencia.produtosLocalizacoes?.prateleiras?.nomePrateleira ??
        "Desconhecido",
      seccao:
        transferencia.produtosLocalizacoes?.seccoes?.nomeSeccao ??
        "Desconhecido",

      funcionarioNome:
        transferencia.funcionarios?.nomeFuncionario ?? "Desconhecido",
    }));
  }

  async listarFaturamentoPorPeriodo(
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
  }> {
    const vendas = await prisma.vendas.findMany({
      where: { dataEmissao: { gte: dataInicio, lte: dataFim } },
      select: {
        numeroDocumento: true,
        valorTotal: true,
        dataEmissao: true,
        funcionariosCaixa: {
          select: { Funcionarios: { select: { nomeFuncionario: true } } },
        },
        vendasProdutos: {
          select: { produtos: { select: { nomeProduto: true } } },
        },
      },
    });

    const totalFaturado = vendas.reduce(
      (acc, venda) => acc + Number(venda.valorTotal),
      0
    );

    const vendasFormatadas = vendas.flatMap((venda) =>
      venda.vendasProdutos.map((vendaProduto) => ({
        nomeProduto: vendaProduto.produtos.nomeProduto,
        totalFaturado: Number(venda.valorTotal),
        dataEmissao: venda.dataEmissao,
        funcionariosCaixa:
          venda.funcionariosCaixa.Funcionarios?.nomeFuncionario ??
          "Desconhecido",
      }))
    );

    return {
      totalFaturado,
      vendas: vendasFormatadas,
    };
  }

  async listarRelatorioVendas(
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
  > {
    const where: any = { dataEmissao: { gte: dataInicio, lte: dataFim } };
    if (idProduto) {
      where.vendasProdutos = { some: { id_produto: idProduto } };
    }

    const vendas = await prisma.vendas.findMany({
      where,
      include: {
        clientes: { select: { nomeCliente: true } },
        funcionariosCaixa: {
          include: {
            caixas: { select: { nomeCaixa: true } },
            Funcionarios: { select: { nomeFuncionario: true } },
          },
        },
        vendasProdutos: {
          include: {
            produtos: { select: { nomeProduto: true, precoVenda: true } },
          },
        },
      },
    });

    return vendas.map((venda) => ({
      numeroDocumento: venda.numeroDocumento,
      dataEmissao: venda.dataEmissao,
      valorTotal: Number(venda.valorTotal),
      cliente: { nomeCliente: venda.clientes?.nomeCliente ?? "Desconhecido" },
      funcionarioCaixa: {
        nomeCaixa: venda.funcionariosCaixa?.caixas?.nomeCaixa ?? "Desconhecido",
        funcionario: {
          nomeFuncionario:
            venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
            "Desconhecido",
        },
      },
      produtos: venda.vendasProdutos.map((vp) => ({
        nomeProduto: vp.produtos.nomeProduto,
        quantidadeVendida: vp.quantidadeVendida,
        precoVenda: Number(vp.produtos.precoVenda),
      })),
    }));
  }

  async listarVendasPorCliente(
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
  > {
    const vendas = await prisma.vendas.findMany({
      where: {
        id_cliente: idCliente,
        dataEmissao: { gte: dataInicio, lte: dataFim },
      },
      include: {
        funcionariosCaixa: {
          include: { Funcionarios: { select: { nomeFuncionario: true } } },
        },
        vendasProdutos: {
          include: { produtos: { select: { nomeProduto: true } } },
        },
      },
    });

    return vendas.map((venda) => ({
      numeroDocumento: venda.numeroDocumento,
      dataEmissao: venda.dataEmissao,
      valorTotal: Number(venda.valorTotal),
      funcionarioNome:
        venda.funcionariosCaixa?.Funcionarios?.nomeFuncionario ??
        "Desconhecido",
      vendasProdutos: venda.vendasProdutos.map((vp) => ({
        produtos: { nomeProduto: vp.produtos.nomeProduto },
        quantidadeVendida: vp.quantidadeVendida,
      })),
    }));
  }
}
