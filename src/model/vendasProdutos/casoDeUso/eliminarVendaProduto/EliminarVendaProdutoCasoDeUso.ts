import { vendasProdutos } from "@prisma/client";
import { VendaProdutoRepositorio } from "../../repositorioVendaProduto/implementacoes/RepositorioVendaProduto";

class DeleteVendaProdutoCasoDeUso {
  async execute(id: string): Promise<vendasProdutos> {
    const repositorioVendaProduto = new VendaProdutoRepositorio();

    if (!id) {
      throw new Error("O ID da venda-produto é obrigatório para exclusão");
    }

    const existeVendaProduto = await repositorioVendaProduto.listarVendaProdutoPorId(id);
    if (!existeVendaProduto) {
      throw new Error("Não existe um registro de venda-produto com esse id");
    }

    const result = await repositorioVendaProduto.eliminarVendaProduto(id);
    return result;
  }
}

export { DeleteVendaProdutoCasoDeUso };