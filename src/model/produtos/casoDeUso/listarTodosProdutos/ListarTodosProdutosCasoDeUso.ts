import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";

class ListarTodosProdutosCasoDeUso {
    async execute(): Promise<produtos[]> {
        const produtoRepositorio = new ProdutoRepositorio();
        const result = await produtoRepositorio.listarTodosProdutos();
        return result;
    }
}
export { ListarTodosProdutosCasoDeUso}