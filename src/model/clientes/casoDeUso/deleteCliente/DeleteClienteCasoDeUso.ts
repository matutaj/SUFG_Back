import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class DeleteClienteCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioCliente = new ClienteRepositorio();

    if (!id) {
      throw new AppError("O ID do cliente é obrigatório para exclusão");
    }

    const existeCliente = await repositorioCliente.listarUmClientePeloId(id);
    if (!existeCliente) {
      throw new AppError("Não existe um cliente com esse id");
    }

    await repositorioCliente.eliminarCliente(id);
  }
}

export { DeleteClienteCasoDeUso };