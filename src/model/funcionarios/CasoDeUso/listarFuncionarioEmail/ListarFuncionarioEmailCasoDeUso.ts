import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarEmailFuncionarioCasoDeUso {
  async execute(emailFuncionario: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!emailFuncionario) {
      throw new Error("O email é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarEmailFuncionario(emailFuncionario);
    return result;
  }
}

export { ListarEmailFuncionarioCasoDeUso };