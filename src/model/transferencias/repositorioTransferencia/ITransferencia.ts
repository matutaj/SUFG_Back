import { transferencias } from "@prisma/client";

export interface DadosTransferencia {
    id?: string
    id_produtoLocalizacao: string;
    id_funcionario: string;
    id_produto: string;
    id_localizacao_origem: string;
    id_localizacao_destino: string;
    id_seccao_destino: string;
    id_prateleira_destino: string;
    id_corredor_destino: string;
    quantidadeTransferida: number;
    dataTransferencia: Date;
}

export interface ITransferencia {
    criarTransferencia({ }: DadosTransferencia): Promise<transferencias>
    listarTodasTransferencias(): Promise<transferencias[]>
    listarUmaTransferenciaPorId(id_transferencia: string): Promise<transferencias | undefined>
    atualizarTransferencia({ }: DadosTransferencia): Promise<transferencias>
    eliminarTransferencia(id_transferencia: string): Promise<void>
}