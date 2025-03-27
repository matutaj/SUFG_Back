import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";
import { AppError } from "../../../../errors/AppError";

class ListarNumeroDeContribuinteCasoDeUso {
  async execute(numeroContribuinte: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!numeroContribuinte) {
      throw new AppError("O número de contribuinte é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarNumeroDeContribuinte(numeroContribuinte);
    return result;
  }
}

export { ListarNumeroDeContribuinteCasoDeUso };