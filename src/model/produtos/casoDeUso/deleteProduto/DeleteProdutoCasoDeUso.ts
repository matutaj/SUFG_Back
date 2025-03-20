import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";

class DeleteProdutoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new Error("O ID do produto é obrigatório para exclusão");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    await repositorioProduto.eliminarProduto(id);
  }
}

export { DeleteProdutoCasoDeUso };