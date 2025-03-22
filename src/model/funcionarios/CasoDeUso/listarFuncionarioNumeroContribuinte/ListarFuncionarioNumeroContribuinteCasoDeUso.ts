import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarNumeroContribuinteFuncionarioCasoDeUso {
  async execute(numeroBI: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!numeroBI) {
      throw new Error("O número de contribuinte (BI) é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarNumeroContribuinteFuncionario(numeroBI);
    return result;
  }
}

export { ListarNumeroContribuinteFuncionarioCasoDeUso };