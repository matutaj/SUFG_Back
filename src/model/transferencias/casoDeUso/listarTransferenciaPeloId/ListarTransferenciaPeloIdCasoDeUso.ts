import { transferencias } from "@prisma/client";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";

class ListarUmaTransferenciaPorIdCasoDeUso {
  async execute(id: string): Promise<transferencias | undefined> {
    const repositorioTransferencia = new TransferenciaRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioTransferencia.listarUmaTransferenciaPorId(id);
    return result;
  }
}

export { ListarUmaTransferenciaPorIdCasoDeUso };