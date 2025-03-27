import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class ListarEmailClienteCasoDeUso {
  async execute(emailCliente: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!emailCliente) {
      throw new AppError("O email é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarEmailCliente(emailCliente);
    return result;
  }
}

export { ListarEmailClienteCasoDeUso };