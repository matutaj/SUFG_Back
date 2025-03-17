import { transferencias } from "@prisma/client";
import { DadosTransferencia } from "../../repositorioTransferencia/ITransferencia";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";
class CriarTransferenciaCasoDeUso {
  async execute({
    id_funcionario,
    id_localizacao,
    id_produto,
    dataTransferencia,
    quantidadeTransferida,
  }: DadosTransferencia): Promise<transferencias> {
    const repositorioTransferencia = new TransferenciaRepositorio();
    const existeData =
      await repositorioTransferencia.listarTodasTransferencias();
    if (!existeData) {
      throw new Error("Nenhuma transferencia cadastrada");
    }
    const result = await repositorioTransferencia.criarTransferencia({
      id_funcionario,
      id_localizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    });
    return result;
  }
}
export { CriarTransferenciaCasoDeUso };
