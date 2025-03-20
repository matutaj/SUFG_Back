import { categoriasProdutos } from "@prisma/client";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";

class DeleteCategoriaProdutoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();

    if (!id) {
      throw new Error("O ID da categoria é obrigatório para exclusão");
    }

    const existeCategoria = await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(id);
    if (!existeCategoria) {
      throw new Error("Não existe uma categoria com esse id");
    }

    await repositorioCategoriaProduto.eliminarCategoriaProduto(id);
  }
}

export { DeleteCategoriaProdutoCasoDeUso };