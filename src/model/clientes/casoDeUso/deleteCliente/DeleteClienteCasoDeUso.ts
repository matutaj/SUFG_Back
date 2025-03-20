import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class DeleteClienteCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCliente = new ClienteRepositorio();

    if (!id) {
      throw new Error("O ID do cliente é obrigatório para exclusão");
    }

    const existeCliente = await repositorioCliente.listarUmClientePeloId(id);
    if (!existeCliente) {
      throw new Error("Não existe um cliente com esse id");
    }

    await repositorioCliente.eliminarCliente(id);
  }
}

export { DeleteClienteCasoDeUso };