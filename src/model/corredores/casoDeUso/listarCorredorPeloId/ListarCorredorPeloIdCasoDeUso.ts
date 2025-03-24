import { corredores } from "@prisma/client";
import { CorredorRepositorio } from "../../repositorioCorredores/implementacoes/RepositorioCorredor";
import { AppError } from "../../../../errors/AppError";
class ListarUmCorredorPeloIdCasoDeUso {
  async execute(id: string): Promise<corredores | undefined> {
    const repositorioCorredor = new CorredorRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioCorredor.listarUmCorredorPeloId(id);
    return result;
  }
}

export { ListarUmCorredorPeloIdCasoDeUso };
