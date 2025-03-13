import { produtosLocalizacoes } from "@prisma/client";
import { DadosProdutoLocalizacao, IProdutoLocalizacao } from "../IProdutoLocalizacao";
import { prisma } from "../../../../prisma/client";

class ProdutoLocalizacaoRepositorio implements IProdutoLocalizacao {
    async criarProdutoLocalizacao({ ID_produto, ID_localizacao, quantidadeProduto, quantidadeMinimaProduto }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
        const criarProdutoLocalizacao = await prisma.produtosLocalizacoes.create({ data: { ID_produto, ID_localizacao, quantidadeProduto, quantidadeMinimaProduto } });
        return criarProdutoLocalizacao;
    }
    async listarTodosProdutosLocalizacoes(): Promise<produtosLocalizacoes[]> {
        const listarTodosProdutosLocalizacoes = await prisma.produtosLocalizacoes.findMany();
        return listarTodosProdutosLocalizacoes;
    }
    async listarUmProdutoLocalizacaoPorId(ID_produtoLocalizacao: string): Promise<produtosLocalizacoes | undefined> {
        const listarUmProdutoLocalizacaoPorId = await prisma.produtosLocalizacoes.findUnique({ where: { ID_produtoLocalizacao } }) || undefined;
        return listarUmProdutoLocalizacaoPorId;
    }
    async atualizarProdutoLocalizacao({ ID_produtoLocalizacao, ID_produto, ID_localizacao, quantidadeProduto, quantidadeMinimaProduto }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
        const atualizarProdutoLocalizacao = await prisma.produtosLocalizacoes.update({
            where: { ID_produtoLocalizacao },
            data: { ID_produto, ID_localizacao, quantidadeProduto, quantidadeMinimaProduto }
        });
        return atualizarProdutoLocalizacao;
    }
    async eliminarProdutoLocalizacao(ID_produtoLocalizacao: string): Promise<void> {
        await prisma.produtosLocalizacoes.delete({ where: { ID_produtoLocalizacao } });
    }

}
export {ProdutoLocalizacaoRepositorio}