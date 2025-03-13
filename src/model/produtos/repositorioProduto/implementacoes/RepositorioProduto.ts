import { produtos } from "@prisma/client";
import { DadosProduto, IProduto } from "../IProduto";
import { prisma } from "../../../../prisma/client";


class ProdutoRepositorio implements IProduto{
    async criarProduto({custoAquisicao, dataValidade, nomeProduto, precoVenda, quantidadeEstoque, referenciaProduto}: DadosProduto): Promise<produtos> {
        const criarProduto = await prisma.produtos.create({
            data: {
                custoAquisicao,
                dataValidade,
                nomeProduto,
                precoVenda,
                quantidadeEstoque,
                referenciaProduto
            }
        });
        return criarProduto;   
    }

    async listarTodosProdutos(): Promise<produtos[]> {
        const todosProdutos = await prisma.produtos.findMany();
        return todosProdutos;
    }

    async listarUmProdutoPorId(ID_produto: string): Promise<produtos | undefined> { 
        const listarUmProdutoPorId = await prisma.produtos.findUnique({ where: { ID_produto } }) || undefined;
        return listarUmProdutoPorId;
    }

    async listarUmProdutoPeloNome(nomeProduto: string): Promise<produtos | undefined> {
        const listarUmProdutoPeloNome = await prisma.produtos.findFirst({ where: { nomeProduto } }) || undefined;
        return listarUmProdutoPeloNome;
    }

    async atualizarProduto({ID_produto, custoAquisicao, dataValidade, nomeProduto, precoVenda, quantidadeEstoque, referenciaProduto}: DadosProduto): Promise<produtos> {
        const atualizarProduto = await prisma.produtos.update({
            where: { ID_produto },
            data: {
                custoAquisicao,
                dataValidade,
                nomeProduto,
                precoVenda,
                quantidadeEstoque,
                referenciaProduto
            }
        });
        return atualizarProduto;
    }

    async eliminarProduto(ID_produto: string): Promise<void> {
        await prisma.produtos.delete({ where: { ID_produto } });
    }

}
export {ProdutoRepositorio}