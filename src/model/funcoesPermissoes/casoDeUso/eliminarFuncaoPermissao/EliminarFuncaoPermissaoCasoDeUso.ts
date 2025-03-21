import { funcoesPermissoes } from "@prisma/client";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
class DeleteFuncaoPermissaoCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();

    if (!id) {
      throw new Error("O ID da função-permissão é obrigatório para exclusão");
    }

    const existeFuncaoPermissao = await repositorioFuncaoPermissao.listarTodasFuncoesPermissoes();
    const funcaoPermissaoExistente = existeFuncaoPermissao.find((fp) => fp.id === id);
    if (!funcaoPermissaoExistente) {
      throw new Error("Não existe um registro de função-permissão com esse id");
    }

    await repositorioFuncaoPermissao.eliminarFuncaoPermissao(id);
  }
}

export { DeleteFuncaoPermissaoCasoDeUso };