import { categoriasProdutos } from "@prisma/client";
import { DadosCategoriaProduto, ICategoriaProduto } from "../ICategoriaProduto";
import { prisma } from "../../../../prisma/client";

class CategoriaProdutoRepositorio implements ICategoriaProduto {
    async criarCategoriaProduto({descricao, nomeCategoria }: DadosCategoriaProduto): Promise<categoriasProdutos> {
        const criarCategoriaProduto = await prisma.categoriasProdutos.create({
            data: {
                descricao,
                nomeCategoria
            }
        })
        return criarCategoriaProduto
    }
    async listarTodasCategoriasProdutos(): Promise<categoriasProdutos[]> {
        const listarTodasCategoriasProdutos = await prisma.categoriasProdutos.findMany()
        return listarTodasCategoriasProdutos
    }
    async listarUmaCategoriaProdutoPeloId(id: string): Promise<categoriasProdutos | undefined> {
        const listarUmaCategoriaProdutoPeloId = 
        (await prisma.categoriasProdutos.findUnique({
            where: {
                id,
        },
        })) || undefined
        return listarUmaCategoriaProdutoPeloId
    }
    async listarUmaCategoriaProdutoPeloNome(nomeCategoria: string): Promise<categoriasProdutos | undefined> {
        const listarUmaCategoriaProdutoPeloNome = (await prisma.categoriasProdutos.findFirst({where: { nomeCategoria}})) || undefined
        return listarUmaCategoriaProdutoPeloNome
    }
    async atualizarCategoriaProduto({descricao, nomeCategoria, id }: DadosCategoriaProduto): Promise<categoriasProdutos> {
        const atualizarCategoriaProduto = await prisma.categoriasProdutos.update({
            where: {
                id
            },
            data: {
                descricao, 
                nomeCategoria,  
            }
        })
        return atualizarCategoriaProduto
    }
    async eliminarCategoriaProduto(id: string): Promise<void> {
        await prisma.categoriasProdutos.delete({
            where: {
                id,
            }
        })
    }

}
export {CategoriaProdutoRepositorio}