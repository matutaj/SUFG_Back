import { funcionariosPermissoes } from "@prisma/client";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";

class ListarUmFuncionarioPermissaoPeloIdCasoDeUso {
  async execute(id: string): Promise<funcionariosPermissoes | undefined> {
    const repositorioFuncionarioPermissao = new FuncionarioPermissaoRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioFuncionarioPermissao.listarUmFuncionarioPermissaoPeloId(id);
    return result;
  }
}

export { ListarUmFuncionarioPermissaoPeloIdCasoDeUso };