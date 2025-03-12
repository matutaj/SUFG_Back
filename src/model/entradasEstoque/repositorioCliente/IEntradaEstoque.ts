import { entradasEstoque } from "@prisma/client"

export interface DadosEntradaEstoque{
    ID_entradaEstoque?: string 
	ID_fornecedor: string
    ID_produto: string
    ID_funcionario: string
    produtoRecebido: string
    quantidadeRecebida: string
    dataEntrada: Date
    custoUnitario: number
}
export interface IEntradaEstoque{
    criarEntradaEstoque({}: DadosEntradaEstoque): Promise<entradasEstoque>
    listarTodasEntradasEstoque(): Promise<entradasEstoque[]>
}