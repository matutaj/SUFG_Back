import { produtos } from "@prisma/client";
import { ProdutoRepositorio } from "../../repositorioProduto/implementacoes/RepositorioProduto";
import { DadosProduto } from "../../repositorioProduto/IProduto";

class CriarProdutoCasoDeUso {
    async execute({descricaoProduto, nomeProduto, custoAquisicao, dataValidade, precoVenda, quantidadeEstoque, referenciaProduto, id_categoriaProduto}: DadosProduto): Promise<produtos> {
        const repositorioProduto = new ProdutoRepositorio();
        const existeNome = await repositorioProduto.listarUmProdutoPeloNome(nomeProduto);
        if (existeNome) {
            throw new Error('Já existe um produto com esse nome');
        }
        const result = await repositorioProduto.criarProduto({descricaoProduto, nomeProduto, custoAquisicao, dataValidade, precoVenda, quantidadeEstoque, referenciaProduto, id_categoriaProduto});
        return result;
    }
}
export {CriarProdutoCasoDeUso}