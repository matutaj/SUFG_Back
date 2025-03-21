import { categoriasProdutos } from "@prisma/client";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";

class ListarCategoriaProdutoPeloNomeCasoDeUso {
  async execute(nomeCategoria: string): Promise<categoriasProdutos> {
    const categoriaProdutoRepositorio = new CategoriaProdutoRepositorio();
    const existeNomeCategoriaProduto =
      await categoriaProdutoRepositorio.listarUmaCategoriaProdutoPeloNome(
        nomeCategoria
      );
    if (!existeNomeCategoriaProduto) {
      throw new AppError("Categoria não encontrada");
    }
    return existeNomeCategoriaProduto;
  }
}
export { ListarCategoriaProdutoPeloNomeCasoDeUso };
