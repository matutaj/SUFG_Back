import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class ListarTelefoneClienteCasoDeUso {
  async execute(telefoneCliente: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!telefoneCliente) {
      throw new AppError("O telefone é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarTelefoneCliente(telefoneCliente);
    return result;
  }
}

export { ListarTelefoneClienteCasoDeUso };