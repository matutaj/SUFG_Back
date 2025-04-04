import { funcionariosPermissoes } from "@prisma/client";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";
import { AppError } from "../../../../errors/AppError";

class DeleteFuncionarioPermissaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionarioPermissao =
      new FuncionarioPermissaoRepositorio();

    if (!id) {
      throw new AppError(
        "O ID do funcionário-permissão é obrigatório para exclusão"
      );
    }

    const existeFuncionarioPermissao =
      await repositorioFuncionarioPermissao.listarUmFuncionarioPermissaoPeloId(
        id
      );
    if (!existeFuncionarioPermissao) {
      throw new AppError(
        "Não existe um registro de funcionário-permissão com esse id"
      );
    }

    await repositorioFuncionarioPermissao.eliminarFuncionarioPermissao(id);
  }
}

export { DeleteFuncionarioPermissaoCasoDeUso };
