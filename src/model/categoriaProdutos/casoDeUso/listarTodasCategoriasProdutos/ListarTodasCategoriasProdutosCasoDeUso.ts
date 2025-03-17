import { categoriasProdutos } from "@prisma/client";
import { CategoriaProdutoRepositorio } from "../../repositorioCategoriaProduto/implementacoes/RepositorioCategoriaProduto";

class ListarTodasCategoriasProdutosCasoDeUso {
    async execute(): Promise<categoriasProdutos[]> {
        const categoriaProdutoRepositorio = new CategoriaProdutoRepositorio()
        const result = await categoriaProdutoRepositorio.listarTodasCategoriasProdutos()
        return result

    }
}
export { ListarTodasCategoriasProdutosCasoDeUso }
