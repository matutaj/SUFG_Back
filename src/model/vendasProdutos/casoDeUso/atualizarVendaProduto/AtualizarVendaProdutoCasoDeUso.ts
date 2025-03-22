import { vendasProdutos } from "@prisma/client";
import { DadosVendaProduto } from "../../repositorioVendaProduto/IVendaProduto";
import { VendaProdutoRepositorio } from "../../repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { VendaRepositorio } from "../../../vendas/repositorioVenda/implementacoes/RepositorioVenda";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
class AtualizarVendaProdutoCasoDeUso {
  async execute({
    id,
    id_venda,
    id_produto,
    quantidadeVendida,
  }: DadosVendaProduto): Promise<vendasProdutos> {
    const repositorioVendaProduto = new VendaProdutoRepositorio();
    const repositorioVenda = new VendaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new Error("O ID da venda-produto é obrigatório para atualização");
    }

    const existeVendaProduto = await repositorioVendaProduto.listarVendaProdutoPorId(id);
    if (!existeVendaProduto) {
      throw new Error("Não existe um registro de venda-produto com esse id");
    }

    const existeVenda = await repositorioVenda.listarVendaPorId(id_venda);
    if (!existeVenda) {
      throw new Error("Não existe uma venda com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    if (quantidadeVendida <= 0) {
      throw new Error("A quantidade vendida deve ser maior que zero");
    }

    const result = await repositorioVendaProduto.atualizarVendaProduto({
      id,
      id_venda,
      id_produto,
      quantidadeVendida,
    });

    return result;
  }
}

export { AtualizarVendaProdutoCasoDeUso };