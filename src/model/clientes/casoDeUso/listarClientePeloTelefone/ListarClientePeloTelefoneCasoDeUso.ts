import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class ListarTelefoneClienteCasoDeUso {
  async execute(telefoneCliente: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!telefoneCliente) {
      throw new Error("O telefone é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarTelefoneCliente(telefoneCliente);
    return result;
  }
}

export { ListarTelefoneClienteCasoDeUso };