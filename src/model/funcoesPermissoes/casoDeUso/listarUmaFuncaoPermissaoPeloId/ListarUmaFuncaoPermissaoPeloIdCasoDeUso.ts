import { funcoesPermissoes } from "@prisma/client";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
class ListarUmaFuncaoPermissaoPeloIdCasoDeUso {
  async execute(id_funcao: string, id_permissao: string): Promise<funcoesPermissoes | undefined> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();

    if (!id_funcao || !id_permissao) {
      throw new Error("Os IDs de função e permissão são obrigatórios para a busca");
    }

    const result = await repositorioFuncaoPermissao.listarUmaFuncaoPermissaoPeloId(id_funcao, id_permissao);
    return result;
  }
}

export { ListarUmaFuncaoPermissaoPeloIdCasoDeUso };