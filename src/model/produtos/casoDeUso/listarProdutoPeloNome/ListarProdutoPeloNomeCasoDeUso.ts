import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { AppError } from "../../../../errors/AppError";

class ListarProdutoPeloNomeCasoDeUso {
    async execute(nomeProduto: string): Promise<produtos> {
        const produtoRepositorio = new ProdutoRepositorio();
        const existeNomeProduto = await produtoRepositorio.listarUmProdutoPeloNome(nomeProduto);
        if (!existeNomeProduto) {
            throw new AppError('Produto não encontrado');
        }
        return existeNomeProduto;
    }
}
export {ListarProdutoPeloNomeCasoDeUso}