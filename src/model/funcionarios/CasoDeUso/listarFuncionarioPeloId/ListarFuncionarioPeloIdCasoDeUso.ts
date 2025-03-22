import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarUmFuncionarioPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionarios | undefined> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionario.listarUmFuncionarioPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioPeloIdCasoDeUso };