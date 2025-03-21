import { categoriasProdutos } from "@prisma/client";
import { DadosCategoriaProduto } from "../../repositorioCategoriaProduto/ICategoriaProduto";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";
import { AppError } from "../../../../errors/AppError";

class AtualizarCategoriaProdutoCasoDeUso {
  async execute({
    id,
    nomeCategoria,
    descricaoCategoria,
  }: DadosCategoriaProduto): Promise<categoriasProdutos> {
    const repositorioCategoriaProduto = new CategoriaProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID da categoria é obrigatório para atualização");
    }

    const existeCategoria =
      await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloId(id);
    if (!existeCategoria) {
      throw new AppError("Não existe uma categoria com esse id");
    }

    const categoriaComMesmoNome =
      await repositorioCategoriaProduto.listarUmaCategoriaProdutoPeloNome(
        nomeCategoria
      );
    if (categoriaComMesmoNome && categoriaComMesmoNome.id !== id) {
      throw new AppError("Já existe uma categoria com esse nome");
    }

    const result = await repositorioCategoriaProduto.atualizarCategoriaProduto({
      id,
      nomeCategoria,
      descricaoCategoria,
    });

    return result;
  }
}

export { AtualizarCategoriaProdutoCasoDeUso };
