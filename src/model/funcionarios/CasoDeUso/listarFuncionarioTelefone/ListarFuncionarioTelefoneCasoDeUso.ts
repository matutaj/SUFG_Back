import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarTelefoneFuncionarioCasoDeUso {
  async execute(telefoneFuncionario: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!telefoneFuncionario) {
      throw new Error("O telefone é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarTelefoneFuncionario(telefoneFuncionario);
    return result;
  }
}

export { ListarTelefoneFuncionarioCasoDeUso };