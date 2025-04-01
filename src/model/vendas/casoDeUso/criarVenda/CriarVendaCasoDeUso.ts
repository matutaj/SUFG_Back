import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { DadosVenda } from "../../repositorioVenda/IVenda";
import { VendaProdutoRepositorio } from "../../../vendasProdutos/repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";
import { ClienteRepositorio } from "../../../clientes/repositorioCliente/implementacoes/RepositorioCliente";

class CriarVendaCasoDeUso {
  async execute({
    id_cliente,
    dataEmissao,
    dataValidade,
    id_funcionarioCaixa,
    numeroDocumento,
    tipoDocumento,
    cliente,
    valorTotal,
    vendasProdutos,
  }: DadosVenda): Promise<vendas> {
    const vendaRepositorio = new VendaRepositorio();
    const vendaProdutoRepositorio = new VendaProdutoRepositorio();
    const repositorioCliente = new ClienteRepositorio();

    if (!numeroDocumento) {
      throw new AppError("Nenhuma transação encontrada!");
    }

    let finalIdCliente: number | string | null = id_cliente; // Inicializa com o id_cliente fornecido

    // Verifica se há clientes para criar e lida com cliente possivelmente undefined
    if (cliente && Array.isArray(cliente) && cliente.length > 0) {
      const clientIds = await Promise.all(
        cliente.map(
          async ({
            emailCliente,
            moradaCliente,
            nomeCliente,
            numeroContribuinte,
            telefoneCliente,
          }) => {
            const novoCliente = await repositorioCliente.criarCliente({
              emailCliente,
              moradaCliente,
              nomeCliente,
              numeroContribuinte,
              telefoneCliente,
            });

            if (!novoCliente || !novoCliente.id) {
              throw new AppError("Falha ao criar cliente. ID não retornado.");
            }

            return novoCliente.id;
          }
        )
      );

      // Usa o ID do último cliente criado
      finalIdCliente = clientIds[clientIds.length - 1];
    } else if (!finalIdCliente) {
      // Se nenhum cliente foi fornecido e não há id_cliente, lança erro
      throw new AppError(
        "Nenhum cliente ou ID de cliente fornecido para a venda!"
      );
    }

    // Verifica novamente se temos um ID de cliente válido
    if (!finalIdCliente) {
      throw new AppError(
        "Nenhum cliente associado à venda após tentativa de criação!"
      );
    }

    // Cria a venda usando o ID do cliente
    const result = await vendaRepositorio.criarVenda({
      id_cliente: finalIdCliente,
      dataEmissao,
      dataValidade,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      valorTotal,
      vendasProdutos,
    });

    // Cria os produtos da venda
    await Promise.all(
      vendasProdutos.map(async ({ id_produto, quantidadeVendida }) => {
        await vendaProdutoRepositorio.criarVendaProduto({
          id_produto,
          id_venda: result.id,
          quantidadeVendida,
        });
      })
    );

    return result;
  }
}

export { CriarVendaCasoDeUso };
