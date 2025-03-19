import { entradasEstoque } from "@prisma/client"

export interface DadosEntradaEstoque{
    id?: string 
	id_fornecedor: string
    id_produto: string
    id_funcionario: string
    produtoRecebido: string
    quantidadeRecebida: string
    dataEntrada: Date
    custoUnitario: number
    lote: string
    dataValidadeLote: Date
}
export interface IEntradaEstoque{
    criarEntradaEstoque({}: DadosEntradaEstoque): Promise<entradasEstoque>
    listarTodasEntradasEstoque(): Promise<entradasEstoque[]>
}