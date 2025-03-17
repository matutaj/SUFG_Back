import { categoriasProdutos } from "@prisma/client";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";

class ListarCategoriaProdutoPeloNomeCasoDeUso {
    async execute(nomeCategoria: string): Promise<categoriasProdutos> {
        const categoriaProdutoRepositorio = new CategoriaProdutoRepositorio();
        const existeNomeCategoriaProduto = await categoriaProdutoRepositorio.listarUmaCategoriaProdutoPeloNome(nomeCategoria);
        if (!existeNomeCategoriaProduto) {
            throw new Error('Categoria não encontrada');
        }
        return existeNomeCategoriaProduto;
    }
}
export {ListarCategoriaProdutoPeloNomeCasoDeUso}