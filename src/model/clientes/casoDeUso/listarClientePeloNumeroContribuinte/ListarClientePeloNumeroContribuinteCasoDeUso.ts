import { clientes } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorioCliente/implementacoes/RepositorioCliente";

class ListarNumeroDeContribuinteCasoDeUso {
  async execute(numeroContribuinte: string): Promise<clientes | undefined> {
    const repositorioCliente = new ClienteRepositorio();

    if (!numeroContribuinte) {
      throw new Error("O número de contribuinte é obrigatório para a busca");
    }

    const result = await repositorioCliente.listarNumeroDeContribuinte(numeroContribuinte);
    return result;
  }
}

export { ListarNumeroDeContribuinteCasoDeUso };