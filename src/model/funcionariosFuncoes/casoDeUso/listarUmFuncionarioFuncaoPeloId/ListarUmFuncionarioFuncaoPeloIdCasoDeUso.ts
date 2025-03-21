import { funcionariosFuncoes } from "@prisma/client";
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao";

class ListarUmFuncionarioFuncaoPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosFuncoes | undefined> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioFuncao.listarUmFuncionarioFuncaoPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioFuncaoPeloIdCasoDeUso };