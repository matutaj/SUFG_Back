import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class ListarNumeroContribuinteFuncionarioCasoDeUso {
  async execute(numeroBI: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!numeroBI) {
      throw new AppError("O número de contribuinte (BI) é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarNumeroContribuinteFuncionario(numeroBI);
    return result;
  }
}

export { ListarNumeroContribuinteFuncionarioCasoDeUso };