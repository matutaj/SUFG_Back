import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
import { AppError } from "../../../../errors/AppError";
class DeleteCorredorCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCorredor = new CorredorRepositorio();

    if (!id) {
      throw new AppError("O ID do corredor é obrigatório para exclusão");
    }

    const existeCorredor = await repositorioCorredor.listarUmCorredorPeloId(id);
    if (!existeCorredor) {
      throw new AppError("Não existe um corredor com esse id");
    }

    await repositorioCorredor.eliminarCorredor(id);
  }
}

export { DeleteCorredorCasoDeUso };
