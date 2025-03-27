import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class ListarEmailFuncionarioCasoDeUso {
  async execute(emailFuncionario: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!emailFuncionario) {
      throw new AppError("O email é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarEmailFuncionario(emailFuncionario);
    return result;
  }
}

export { ListarEmailFuncionarioCasoDeUso };