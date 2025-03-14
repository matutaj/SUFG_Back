import { transacaoes } from "@prisma/client"

enum TipoDocumento {
  FATURA = 'FATURA',
  RECIBO = 'RECIBO',
  FATURA_PROFORMA = 'FATURA_PROFORMA',
  FATURA_RECIBO = 'FATURA_RECIBO',
}

export interface DadosTransacao{
    ID_transacao?: string
    ID_cliente: string
    ID_caixa: string
    numeroDocumento: string
    tipoDocumento: TipoDocumento
    dataEmissao: Date
    quantidadeVendida: number
    precoUnitario: number
    valorTotalTransacao: number
}
 export interface ITransacao{
    criarTransacao({}: DadosTransacao): Promise<transacaoes>
    listarTodasTransacoes(): Promise<transacaoes[]>
 }