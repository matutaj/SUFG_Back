import { funcionariosFuncoes } from "@prisma/client";
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao";
import { AppError } from "../../../../errors/AppError";

class DeleteFuncionarioFuncaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();

    if (!id) {
      throw new AppError("O ID do funcionário-função é obrigatório para exclusão");
    }

    const existeFuncionarioFuncao = await repositorioFuncionarioFuncao.listarUmFuncionarioFuncaoPeloId(id);
    if (!existeFuncionarioFuncao) {
      throw new AppError("Não existe um registro de funcionário-função com esse id");
    }

    await repositorioFuncionarioFuncao.eliminarFuncionarioFuncao(id);
  }
}

export { DeleteFuncionarioFuncaoCasoDeUso };