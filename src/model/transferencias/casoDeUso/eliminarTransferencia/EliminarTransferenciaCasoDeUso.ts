import { transferencias } from "@prisma/client";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";

class DeleteTransferenciaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioTransferencia = new TransferenciaRepositorio();

    if (!id) {
      throw new Error("O ID da transferência é obrigatório para exclusão");
    }

    const existeTransferencia = await repositorioTransferencia.listarUmaTransferenciaPorId(id);
    if (!existeTransferencia) {
      throw new Error("Não existe uma transferência com esse id");
    }

    await repositorioTransferencia.eliminarTransferencia(id);
  }
}

export { DeleteTransferenciaCasoDeUso };