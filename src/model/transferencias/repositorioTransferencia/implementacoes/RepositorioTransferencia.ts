import { transferencias } from "@prisma/client";
import { DadosTransferencia, ITransferencia } from "../ITransferencia";
import  prisma  from "../../../../prisma/client";


class TransferenciaRepositorio implements ITransferencia {
  async criarTransferencia({
    id_funcionario,
    id_localizacao,
    id_produto,
    dataTransferencia,
    quantidadeTransferida,
  }: DadosTransferencia): Promise<transferencias> {
    const criarTransferencia = await prisma.transferencias.create({
      data: {
        id_funcionario,
        id_localizacao,
        id_produto,
        dataTransferencia,
        quantidadeTransferida,
      },
    });
    return criarTransferencia;
  }

  async listarTodasTransferencias(): Promise<transferencias[]> {
    const listarTodasTransferencias = await prisma.transferencias.findMany();
    return listarTodasTransferencias;
  }

  async listarUmaTransferenciaPorId(
    id: string
  ): Promise<transferencias | undefined> {
    const listarUmaTransferenciaPorId =
      (await prisma.transferencias.findUnique({ where: { id } })) || undefined;
    return listarUmaTransferenciaPorId;
  }

  async atualizarTransferencia({
    id_funcionario,
    id_localizacao,
    id_produto,
    dataTransferencia,
    quantidadeTransferida,
    id,
  }: DadosTransferencia): Promise<transferencias> {
    const atualizarTransferencia = await prisma.transferencias.update({
      where: { id },
      data: {
        id_funcionario,
        id_localizacao,
        id_produto,
        dataTransferencia,
        quantidadeTransferida,
      },
    });
    return atualizarTransferencia;
  }

  async eliminarTransferencia(id: string): Promise<void> {
    await prisma.transferencias.delete({ where: { id } });
  }
}
export { TransferenciaRepositorio };
