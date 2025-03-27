import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class ListarUmClientePeloIdCasoDeUso {
  async execute(id: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarUmClientePeloId(id);
    return result;
  }
}

export { ListarUmClientePeloIdCasoDeUso };