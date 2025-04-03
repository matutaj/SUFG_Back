import { vendas, tipoDocumento } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { VendaProdutoRepositorio } from "../../../vendasProdutos/repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../clientes/repositorioCliente/implementacoes/RepositorioCliente";

export interface DadosVenda {
  id_cliente?: string; // Tornar opcional se for criar novo cliente
  dataEmissao: Date;
  dataValidade: Date;
  id_funcionarioCaixa: string;
  numeroDocumento: string;
  tipoDocumento: tipoDocumento;
  valorTotal: number;
  vendasProdutos: {
    id_produto: string;
    quantidade: number;
    valorTotal?: number; // Opcional
  }[];
}

export interface Cliente {
  emailCliente: string;
  moradaCliente: string;
  nomeCliente: string;
  telefoneCliente: string;
  numeroContribuinte: string;
}

export interface DadosWrapper {
  Dados?: { // Tornar opcional para evitar erros se ausente
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

    // Validação inicial: verifica se dadosVenda existe
    if (!dadosVenda) {
      throw new AppError("Dados da venda não fornecidos!", 400);
    }


    let finalIdCliente: string | null = null;

    if (cliente && cliente.length > 0) {
      try {
        const primeiroCliente = cliente[0];

        const novoCliente = await repositorioCliente.criarCliente({
          emailCliente: primeiroCliente.emailCliente,
          moradaCliente: primeiroCliente.moradaCliente,
          nomeCliente: primeiroCliente.nomeCliente,
          numeroContribuinte: primeiroCliente.numeroContribuinte,
          telefoneCliente: primeiroCliente.telefoneCliente,
        });

        if (!novoCliente || !novoCliente.id) {
          throw new AppError("Falha ao criar cliente. ID não retornado.", 500);
        }

        finalIdCliente = novoCliente.id;
      } catch (error) {
        throw new AppError(`Erro ao criar cliente: ${(error as Error).message}`, 500);
      }
    } else if (dadosVenda.id_cliente) {
      if (!dadosVenda.id_cliente) {
        throw new AppError("ID do cliente inválido.", 400);
      }
      finalIdCliente = dadosVenda.id_cliente.toString();
    } else {
      throw new AppError(
        "Nenhum cliente ou ID de cliente fornecido para a venda! Por favor, forneça os dados de um novo cliente ou o ID de um cliente existente.",
        400
      );
    }

    // Validação final: assegura que temos um ID de cliente válido
    if (!finalIdCliente) {
      throw new AppError("Nenhum cliente associado à venda após tentativa de criação!", 400);
    }

    // Validação dos produtos da venda
    if (!Array.isArray(dadosVenda.vendasProdutos) || dadosVenda.vendasProdutos.length === 0) {
      throw new AppError("Nenhum produto associado à venda.", 400);
    }

    // Converter strings de data para objetos Date
    const dataEmissao = new Date(dadosVenda.dataEmissao);
    const dataValidade = new Date(dadosVenda.dataValidade);

    if (isNaN(dataEmissao.getTime()) || isNaN(dataValidade.getTime())) {
      throw new AppError("Datas inválidas!", 400);
    }

    // Agora cria a venda usando o ID do cliente (seja recém-criado ou fornecido)
    try {
      // Cria a venda sem os produtos (ou com um formato que o repositório espera)
      const result = await vendaRepositorio.criarVenda({
        id_cliente: finalIdCliente,
        dataEmissao: dataEmissao,
        dataValidade: dataValidade,
        id_funcionarioCaixa: dadosVenda.id_funcionarioCaixa.toString(), // Garante que é string
        numeroDocumento: dadosVenda.numeroDocumento,
        tipoDocumento: dadosVenda.tipoDocumento,
        valorTotal: dadosVenda.valorTotal,
      });

      // Cria os produtos da venda de forma assíncrona, usando o id_venda recém-criado
      await Promise.all(
        dadosVenda.vendasProdutos.map(async (produto) => {
          if (!produto.id_produto || !produto.quantidade) {
            throw new AppError("Cada produto deve ter ID e quantidade.", 400);
          }

          await vendaProdutoRepositorio.criarVendaProduto({
            id_venda: result.id, // Agora temos o ID da venda
            id_produto: produto.id_produto,
            quantidadeVendida: produto.quantidade,
          });
        })
      );

      return result;
    } catch (error) {
      console.error("Erro detalhado:", error);
      throw new AppError(`Erro ao criar venda: ${(error as Error).message}`, 500);
    }
  }
}

export { CriarVendaCasoDeUso };