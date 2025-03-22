import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";

class ListarUmProdutoPorIdCasoDeUso {
  async execute(id: string): Promise<produtos | undefined> {
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioProduto.listarUmProdutoPorId(id);
    return result;
  }
}

export { ListarUmProdutoPorIdCasoDeUso };