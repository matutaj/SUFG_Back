import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
class DeleteCorredorCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCorredor = new CorredorRepositorio();

    if (!id) {
      throw new Error("O ID do corredor é obrigatório para exclusão");
    }

    const existeCorredor = await repositorioCorredor.listarUmCorredorPeloId(id);
    if (!existeCorredor) {
      throw new Error("Não existe um corredor com esse id");
    }

    await repositorioCorredor.eliminarCorredor(id);
  }
}

export { DeleteCorredorCasoDeUso };