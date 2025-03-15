import { transacaoes, tipoDocumento } from "@prisma/client"

export interface DadosTransacao{
    id?: string
    id_cliente: string
    id_caixa: string
    id_produto: string
    id_funcionario: string
    numeroDocumento: string
    tipoDocumento: tipoDocumento
    dataEmissao: Date
    quantidadeVendida: number
    precoUnitario: number
    valorTotalTransacao: number
}
 export interface ITransacao{
    criarTransacao({}: DadosTransacao): Promise<transacaoes>
    listarTodasTransacoes(): Promise<transacaoes[]>
 }