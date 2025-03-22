import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class ListarUmClientePeloIdCasoDeUso {
  async execute(id: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarUmClientePeloId(id);
    return result;
  }
}

export { ListarUmClientePeloIdCasoDeUso };