import { funcoesPermissoes } from "@prisma/client";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
class ListarTodasFuncoesPermissoesCasoDeUso {
  async execute(): Promise<funcoesPermissoes[]> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();
    const result = await repositorioFuncaoPermissao.listarTodasFuncoesPermissoes();
    return result;
  }
}

export { ListarTodasFuncoesPermissoesCasoDeUso };