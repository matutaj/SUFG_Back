import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";

class DeleteCategoriaProdutoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID da categoria é obrigatório para exclusão");
    }

    const existeCategoria =
      await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(id);
    if (!existeCategoria) {
      throw new AppError("Não existe uma categoria com esse id");
    }

    await repositorioCategoriaProduto.eliminarCategoriaProduto(id);
  }
}

export { DeleteCategoriaProdutoCasoDeUso };
