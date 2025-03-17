import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque, IEntradaEstoque } from "../IEntradaEstoque";
import { prisma } from "../../../../prisma/client";

class EntradaEstoqueRepositorio implements IEntradaEstoque{
    async criarEntradaEstoque({custoUnitario, dataEntrada, produtoRecebido, quantidadeRecebida, id_fornecedor, id_produto, id_funcionario}: DadosEntradaEstoque): Promise<entradasEstoque> {
        const criarEntradaEstoque = await prisma.entradasEstoque.create({
            data: {
                custoUnitario,
                dataEntrada,
                produtoRecebido,
                quantidadeRecebida,
                id_fornecedor,
                id_produto,
                id_funcionario
            
            }
        })
        return criarEntradaEstoque
    }
    async listarTodasEntradasEstoque(): Promise<entradasEstoque[]> {
        const listarTodasEntradasEstoque = await prisma.entradasEstoque.findMany()
        return listarTodasEntradasEstoque
    }
}