import { transferencias } from "@prisma/client";
import { DadosTransferencia, ITransferencia } from "../ITransferencia";
import { prisma } from "../../../../prisma/client";


class TransferenciaRepositorio implements ITransferencia {
    async criarTransferencia({ ID_funcionario, ID_localizacao, ID_produto, dataTransferencia, quantidadeTransferida}: DadosTransferencia): Promise<transferencias> {
        const criarTransferencia = await prisma.transferencias.create({ data: { ID_funcionario, ID_localizacao, ID_produto, dataTransferencia, quantidadeTransferida } });
        return criarTransferencia;
    }

    async listarTodasTransferencias(): Promise<transferencias[]> {
        const listarTodasTransferencias = await prisma.transferencias.findMany();
        return listarTodasTransferencias;
    }

    async listarUmaTransferenciaPorId(ID_transferencia: string): Promise<transferencias | undefined> {
        const listarUmaTransferenciaPorId = await prisma.transferencias.findUnique({ where: { ID_transferencia } }) || undefined;
        return listarUmaTransferenciaPorId;
    }

    async eliminarTransferencia(ID_transferencia: string): Promise<void> {
        await prisma.transferencias.delete({ where: { ID_transferencia } });
    }

}
export {TransferenciaRepositorio}