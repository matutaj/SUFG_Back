import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { DadosVenda } from "../../repositorioVenda/IVenda";
import { VendaProdutoRepositorio } from "../../../vendasProdutos/repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";

class CriarVendaCasoDeUso {
  async execute({
    id_cliente,
    dataEmissao,
    dataValidade,
    id_funcionarioCaixa,
    numeroDocumento,
    tipoDocumento,
    valorTotal,
    vendasProdutos,
  }: DadosVenda): Promise<vendas> {
    const vendaRepositorio = new VendaRepositorio();
    const vendaProdutoRepositorio = new VendaProdutoRepositorio();
    if (!numeroDocumento) {
      throw new AppError("Nenhuma transacao encontrada!");
    }
    const result = await vendaRepositorio.criarVenda({
      id_cliente,
      dataEmissao,
      dataValidade,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      valorTotal,
      vendasProdutos,
    });

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
