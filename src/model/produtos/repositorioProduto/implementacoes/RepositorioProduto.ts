import { produtos } from "@prisma/client";
import { DadosProduto, IProduto } from "../IProduto";
import { prisma } from "../../../../prisma/client";


class ProdutoRepositorio implements IProduto{
    async criarProduto({custoAquisicao, dataValidade, nomeProduto, precoVenda, quantidadeEstoque, referenciaProduto, id_categoriaProduto}: DadosProduto): Promise<produtos> {
        const criarProduto = await prisma.produtos.create({
            data: {
                custoAquisicao,
                dataValidade,
                nomeProduto,
                precoVenda,
                quantidadeEstoque,
                referenciaProduto,
                categoriasProdutos: {
                    connect: {
                        id: id_categoriaProduto
                    }
                }
            }
        });
        return criarProduto;   
    }

    async listarTodosProdutos(): Promise<produtos[]> {
        const todosProdutos = await prisma.produtos.findMany();
        return todosProdutos;
    }

    async listarUmProdutoPorId(id: string): Promise<produtos | undefined> { 
        const listarUmProdutoPorId = await prisma.produtos.findUnique({ where: { id } }) || undefined;
        return listarUmProdutoPorId;
    }

    async listarUmProdutoPeloNome(nomeProduto: string): Promise<produtos | undefined> {
        const listarUmProdutoPeloNome = await prisma.produtos.findFirst({ where: { nomeProduto } }) || undefined;
        return listarUmProdutoPeloNome;
    }

    async atualizarProduto({id, custoAquisicao, dataValidade, nomeProduto, precoVenda, quantidadeEstoque, referenciaProduto}: DadosProduto): Promise<produtos> {
        const atualizarProduto = await prisma.produtos.update({
            where: { id },
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

    async eliminarProduto(id: string): Promise<void> {
        await prisma.produtos.delete({ where: { id } });
    }

}
export {ProdutoRepositorio}