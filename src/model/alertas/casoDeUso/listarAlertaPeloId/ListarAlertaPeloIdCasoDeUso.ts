import { alertas } from "@prisma/client";
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta";

class ListarUmAlertaPeloIdCasoDeUso {
  async execute(id: string): Promise<alertas | undefined> {
    const repositorioAlerta = new AlertaRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioAlerta.listarUmAlertaPeloId(id);
    return result;
  }
}

export { ListarUmAlertaPeloIdCasoDeUso };