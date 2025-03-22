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
    listarUmaTransferenciaPorId(id_transferencia: string): Promise<transferencias | undefined>
    atualizarTransferencia({ }: DadosTransferencia): Promise<transferencias>
    eliminarTransferencia(id_transferencia: string): Promise<void>
}