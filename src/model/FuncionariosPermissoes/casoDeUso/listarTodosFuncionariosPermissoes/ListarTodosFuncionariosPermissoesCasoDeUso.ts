import { funcionariosPermissoes } from "@prisma/client";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";

class ListarTodosFuncionariosPermissoesCasoDeUso {
  async execute(): Promise<funcionariosPermissoes[]> {
    const repositorioFuncionarioPermissao = new FuncionarioPermissaoRepositorio();
    const result = await repositorioFuncionarioPermissao.listarTodosFuncionariosPermissoes();
    return result;
  }
}

export { ListarTodosFuncionariosPermissoesCasoDeUso };