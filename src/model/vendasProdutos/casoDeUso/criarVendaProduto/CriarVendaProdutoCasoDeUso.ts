import { vendasProdutos } from "@prisma/client";
import { DadosVendaProduto } from "../../repositorioVendaProduto/IVendaProduto";
import { VendaProdutoRepositorio } from "../../repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";

class CriarVendaProdutoCasoDeUso {
  async execute({
    id_produto,
    id_venda,
    quantidadeVendida,
  }: DadosVendaProduto): Promise<vendasProdutos> {
    const repositorioVendaProduto = new VendaProdutoRepositorio();
    const existeNome =
      await repositorioVendaProduto.listarTodasVendasProdutos();
    if (existeNome) {
      throw new AppError("Já existe uma venda com esse nome");
    }
    const result = await repositorioVendaProduto.criarVendaProduto({
      id_produto,
      id_venda,
      quantidadeVendida,
    });
    return result;
  }
}
export { CriarVendaProdutoCasoDeUso };
