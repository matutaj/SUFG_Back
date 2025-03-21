import { categoriasProdutos } from "@prisma/client";
import { DadosCategoriaProduto } from "../../repositorioCategoriaProduto/ICategoriaProduto";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";

class CriarCategoriaProdutoCasoDeUso {
  async execute({
    nomeCategoria,
    descricaoCategoria,
  }: DadosCategoriaProduto): Promise<categoriasProdutos> {
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();
    const existeNome =
      await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloNome(
        nomeCategoria
      );
    if (existeNome) {
      throw new AppError("Já existe uma categoria com esse nome");
    }
    const result = await repositorioCategoriaProduto.criarCategoriaProduto({
      nomeCategoria,
      descricaoCategoria,
    });
    return result;
  }
}
export { CriarCategoriaProdutoCasoDeUso };
