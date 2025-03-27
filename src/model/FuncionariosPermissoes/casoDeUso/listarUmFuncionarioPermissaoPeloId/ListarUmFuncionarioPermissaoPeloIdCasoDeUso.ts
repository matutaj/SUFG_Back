import { funcionariosPermissoes } from "@prisma/client";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";
import { AppError } from "../../../../errors/AppError";

class ListarUmFuncionarioPermissaoPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosPermissoes | undefined> {
    const repositorioFuncionarioPermissao = new FuncionarioPermissaoRepositorio();

    if (!id) {
      throw new AppError("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioPermissao.listarUmFuncionarioPermissaoPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioPermissaoPeloIdCasoDeUso };