import { categoriasProdutos } from "@prisma/client";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";

class ListarUmaCategoriaProdutoPeloIdCasoDeUso {
  async execute(id: string): Promise<categoriasProdutos | undefined> {
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(id);
    return result;
  }
}

export { ListarUmaCategoriaProdutoPeloIdCasoDeUso };