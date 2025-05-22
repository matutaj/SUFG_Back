import { funcoesPermissoes } from "@prisma/client";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
import { AppError } from "../../../../errors/AppError";
class ListarFuncoesPermissoesPeloIdDaFuncao {
  async execute(id_funcao: string): Promise<funcoesPermissoes[]> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();

    if (!id_funcao) {
      throw new AppError("O ID de função é obrigatórios para a busca");
    }

    const result =
      await repositorioFuncaoPermissao.listarFuncoesPermissoesPeloIdDaFuncao(
        id_funcao
      );
    return result;
  }
}

export { ListarFuncoesPermissoesPeloIdDaFuncao };
