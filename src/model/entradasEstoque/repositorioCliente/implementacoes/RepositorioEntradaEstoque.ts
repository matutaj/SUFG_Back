import { entradasEstoque } from "@prisma/client";
import { DadosEntradaEstoque, IEntradaEstoque } from "../IEntradaEstoque";
import { prisma } from "../../../../prisma/client";

class EntradaEstoqueRepositorio implements IEntradaEstoque{
    async criarEntradaEstoque({custoUnitario, dataEntrada, produtoRecebido, quantidadeRecebida}: DadosEntradaEstoque): Promise<entradasEstoque> {
        const criarEntradaEstoque = await prisma.entradasEstoque.create({
            data: {
                custoUnitario,
                dataEntrada,
                produtoRecebido,
                quantidadeRecebida,
                Fornecedores: { connect: { ID_fornecedor: 'your_fornecedor_id' } },
                Produtos: { connect: { ID_produto: 'your_produto_id' } },
                funcionarios: { connect: { ID_funcionario: 'your_funcionario_id' } },
            
            }
        })
        return criarEntradaEstoque
    }
    async listarTodasEntradasEstoque(): Promise<entradasEstoque[]> {
        const listarTodasEntradasEstoque = await prisma.entradasEstoque.findMany()
        return listarTodasEntradasEstoque
    }
}