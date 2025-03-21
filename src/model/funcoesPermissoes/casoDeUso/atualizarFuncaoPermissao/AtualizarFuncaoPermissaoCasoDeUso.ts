import { funcoesPermissoes } from "@prisma/client";
import { DadosFuncaoPermissao } from "../../repositoriosFuncaoPermissao/IFuncaoPermissao";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
import { FuncaoRepositorio } from "../../../funcoes/repositorioFuncao/implementacoes/RepositorioFuncao";
import { PermissaoRepositorio } from "../../../permissoes/repositorioPermissao/implementacoes/RepositorioPermissao";
class AtualizarFuncaoPermissaoCasoDeUso {
  async execute({
    id,
    id_funcao,
    id_permissao,
  }: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();
    const repositorioFuncao = new FuncaoRepositorio();
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new Error("O ID da função-permissão é obrigatório para atualização");
    }

    const existeFuncaoPermissao = await repositorioFuncaoPermissao.listarUmaFuncaoPermissaoPeloId(id_funcao, id_permissao);
    if (!existeFuncaoPermissao) {
      throw new Error("Não existe um registro de função-permissão com esses ids");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id_funcao);
    if (!existeFuncao) {
      throw new Error("Não existe uma função com esse id");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id_permissao);
    if (!existePermissao) {
      throw new Error("Não existe uma permissão com esse id");
    }

    const result = await repositorioFuncaoPermissao.atualizarFuncaoPermissao({
      id,
      id_funcao,
      id_permissao,
    });

    return result;
  }
}

export { AtualizarFuncaoPermissaoCasoDeUso };