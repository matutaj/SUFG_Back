import { transferencias } from "@prisma/client";

export interface DadosTransferencia {
    id?: string
    id_produto: string
    id_funcionario: string
    id_localizacao: string
    dataTransferencia: Date
    quantidadeTransferida: number
}
export interface ITransferencia {
    criarTransferencia({ }: DadosTransferencia): Promise<transferencias>
    listarTodasTransferencias(): Promise<transferencias[]>
    listarUmaTransferenciaPorId(ID_transferencia: string): Promise<transferencias | undefined>
    eliminarTransferencia(ID_transferencia: string): Promise<void>
}