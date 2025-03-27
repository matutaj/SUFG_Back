import { transferencias } from "@prisma/client";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";
import { AppError } from "../../../../errors/AppError";

class DeleteTransferenciaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioTransferencia = new TransferenciaRepositorio();

    if (!id) {
      throw new AppError("O ID da transferência é obrigatório para exclusão");
    }

    const existeTransferencia = await repositorioTransferencia.listarUmaTransferenciaPorId(id);
    if (!existeTransferencia) {
      throw new AppError("Não existe uma transferência com esse id");
    }

    await repositorioTransferencia.eliminarTransferencia(id);
  }
}

export { DeleteTransferenciaCasoDeUso };