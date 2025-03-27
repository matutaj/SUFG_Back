import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class ListarTelefoneFuncionarioCasoDeUso {
  async execute(telefoneFuncionario: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!telefoneFuncionario) {
      throw new AppError("O telefone é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarTelefoneFuncionario(telefoneFuncionario);
    return result;
  }
}

export { ListarTelefoneFuncionarioCasoDeUso };