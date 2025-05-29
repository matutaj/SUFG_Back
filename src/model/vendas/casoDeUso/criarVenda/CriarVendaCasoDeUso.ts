import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { VendaProdutoRepositorio } from "../../../vendasProdutos/repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../clientes/repositorioCliente/implementacoes/RepositorioCliente";

export interface DadosVenda {
  id_cliente?: string | null; // Explicita que pode ser null
  dataEmissao: Date;
  dataValidade: Date;
  id_funcionarioCaixa: string;
  metodoPagamento: string;
  numeroDocumento: string;
  valorTotal: number;
  vendasProdutos: {
    id_produto: string;
    quantidade: number;
    valorTotal?: number;
  }[];
}

export interface Cliente {
  emailCliente: string | null;
  moradaCliente: string | null;
  nomeCliente: string;
  telefoneCliente: string | null;
  numeroContribuinte: string | null; // Permitir null
}

export interface DadosWrapper {
  Dados?: {
    cliente?: Cliente[];
    dadosVenda: DadosVenda;
  };
}

class CriarVendaCasoDeUso {
  async execute(data: DadosWrapper): Promise<vendas> {
    if (!data.Dados) {
      throw new AppError("Dados da venda não fornecidos ou malformados!", 400);
    }

    const { cliente, dadosVenda } = data.Dados;

    const vendaRepositorio = new VendaRepositorio();
    const vendaProdutoRepositorio = new VendaProdutoRepositorio();
    const repositorioCliente = new ClienteRepositorio();

    if (!dadosVenda) {
      throw new AppError("Dados da venda não fornecidos!", 400);
    }

    let finalIdCliente: string | null = dadosVenda.id_cliente || null;

    if (cliente && cliente.length > 0) {
      try {
        const primeiroCliente = cliente[0];

        // Validar campos obrigatórios do cliente
        if (!primeiroCliente.nomeCliente) {
          throw new AppError("Nome do cliente é obrigatório.", 400);
        }

        const novoCliente = await repositorioCliente.criarCliente({
          emailCliente: primeiroCliente.emailCliente || null,
          moradaCliente: primeiroCliente.moradaCliente || null,
          nomeCliente: primeiroCliente.nomeCliente,
          numeroContribuinte: primeiroCliente.numeroContribuinte || null,
          telefoneCliente: primeiroCliente.telefoneCliente || null,
        });

        if (!novoCliente || !novoCliente.id) {
          throw new AppError("Falha ao criar cliente. ID não retornado.", 500);
        }

        finalIdCliente = novoCliente.id;
      } catch (error) {
        console.error("Erro ao criar cliente:", error);
        throw new AppError(
          `Erro ao criar cliente: ${(error as Error).message}`,
          500
        );
      }
    }

    // Validação dos produtos da venda
    if (
      !Array.isArray(dadosVenda.vendasProdutos) ||
      dadosVenda.vendasProdutos.length === 0
    ) {
      throw new AppError("Nenhum produto associado à venda.", 400);
    }

    // Converter strings de data para objetos Date
    const dataEmissao = new Date(dadosVenda.dataEmissao);
    const dataValidade = new Date(dadosVenda.dataValidade);

    if (isNaN(dataEmissao.getTime()) || isNaN(dataValidade.getTime())) {
      throw new AppError("Datas inválidas!", 400);
    }

    // Validar método de pagamento
    const metodosValidos = ['DINHEIRO', 'CARTAO', 'TRANSFERENCIA'];
    if (!metodosValidos.includes(dadosVenda.metodoPagamento)) {
      throw new AppError("Método de pagamento inválido.", 400);
    }

    try {
      // Criar a venda
      const result = await vendaRepositorio.criarVenda({
        id_cliente: finalIdCliente,
        dataEmissao,
        dataValidade,
        id_funcionarioCaixa: dadosVenda.id_funcionarioCaixa.toString(),
        numeroDocumento: dadosVenda.numeroDocumento,
        valorTotal: dadosVenda.valorTotal,
        metodoPagamento: dadosVenda.metodoPagamento,
      });

      // Criar os produtos da venda
      await Promise.all(
        dadosVenda.vendasProdutos.map(async (produto) => {
          if (!produto.id_produto || !produto.quantidade || produto.quantidade <= 0) {
            throw new AppError("Cada produto deve ter ID válido e quantidade maior que zero.", 400);
          }

          await vendaProdutoRepositorio.criarVendaProduto({
            id_venda: result.id,
            id_produto: produto.id_produto,
            quantidadeVendida: produto.quantidade,
          });
        })
      );

      return result;
    } catch (error) {
      console.error("Erro ao criar venda:", error);
      throw new AppError(
        `Erro ao criar venda: ${(error as Error).message}`,
        500
      );
    }
  }
}

export { CriarVendaCasoDeUso };