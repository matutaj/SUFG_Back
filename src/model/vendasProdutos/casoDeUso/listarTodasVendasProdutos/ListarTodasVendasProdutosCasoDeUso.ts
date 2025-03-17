import { vendasProdutos } from "@prisma/client";
import { VendaProdutoRepositorio } from "../../repositorioVendaProduto/implementacoes/RepositorioVendaProduto";

class ListarTodasVendasProdutosCasoDeUso {
    async execute(): Promise<vendasProdutos[]> {
        const repositorioVendaProduto = new VendaProdutoRepositorio();
        const result = await repositorioVendaProduto.listarTodasVendasProdutos();
        return result;
    }
}
export { ListarTodasVendasProdutosCasoDeUso }