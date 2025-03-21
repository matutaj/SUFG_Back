import { funcionariosFuncoes } from "@prisma/client";
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao";

class DeleteFuncionarioFuncaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();

    if (!id) {
      throw new Error("O ID do funcionário-função é obrigatório para exclusão");
    }

    const existeFuncionarioFuncao = await repositorioFuncionarioFuncao.listarUmFuncionarioFuncaoPeloId(id);
    if (!existeFuncionarioFuncao) {
      throw new Error("Não existe um registro de funcionário-função com esse id");
    }

    await repositorioFuncionarioFuncao.eliminarFuncionarioFuncao(id);
  }
}

export { DeleteFuncionarioFuncaoCasoDeUso };