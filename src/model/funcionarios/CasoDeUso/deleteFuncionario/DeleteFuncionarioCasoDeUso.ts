import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class DeleteFuncionarioCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    if (!id) {
      throw new AppError("O ID do funcionário é obrigatório para exclusão");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    await repositorioFuncionario.eliminarFuncionario(id);
  }
}

export { DeleteFuncionarioCasoDeUso };