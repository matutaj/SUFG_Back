import { transferencias } from "@prisma/client";

export interface DadosTransferencia {
    ID_transferencia: string
    ID_produto: string
    ID_funcionario: string
    ID_localizacao: string
    dataTransferencia: Date
    quantidadeTransferida: number
}
export interface ITransferencia {
    criarTransferencia({ }: DadosTransferencia): Promise<transferencias>
    listarTodasTransferencias(): Promise<transferencias[]>
    listarUmaTransferenciaPorId(ID_transferencia: string): Promise<transferencias | undefined>
    eliminarTransferencia(ID_transferencia: string): Promise<void>
}