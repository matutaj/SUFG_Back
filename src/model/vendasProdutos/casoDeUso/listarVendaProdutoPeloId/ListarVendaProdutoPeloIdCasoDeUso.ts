import { vendasProdutos } from "@prisma/client";
import { VendaProdutoRepositorio } from "../../repositorioVendaProduto/implementacoes/RepositorioVendaProduto";
import { AppError } from "../../../../errors/AppError";

class ListarVendaProdutoPorIdCasoDeUso {
  async execute(id: string): Promise<vendasProdutos | undefined> {
    const repositorioVendaProduto = new VendaProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioVendaProduto.listarVendaProdutoPorId(id);
    return result;
  }
}

export { ListarVendaProdutoPorIdCasoDeUso };