import { funcoesPermissoes } from "@prisma/client";
import { DadosFuncaoPermissao } from "../../repositoriosFuncaoPermissao/IFuncaoPermissao";
import { FuncaoPermissaoRepositorio } from "../../repositoriosFuncaoPermissao/implementacoes/RepositorioFuncaoPermissao";
import { FuncaoRepositorio } from "../../../funcoes/repositorioFuncao/implementacoes/RepositorioFuncao"; 
import { PermissaoRepositorio } from "../../../permissoes/repositorioPermissao/implementacoes/RepositorioPermissao"; 
import { AppError } from "../../../../errors/AppError";

class CriarFuncaoPermissaoCasoDeUso {
  async execute({
    id,
    id_funcao,
    id_permissao,
  }: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
    const repositorioFuncaoPermissao = new FuncaoPermissaoRepositorio();
    const repositorioFuncao = new FuncaoRepositorio();
    const repositorioPermissao = new PermissaoRepositorio();

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id_funcao);
    if (!existeFuncao) {
      throw new AppError("Não existe uma função com esse id");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id_permissao);
    if (!existePermissao) {
      throw new AppError("Não existe uma permissão com esse id");
    }

    const result = await repositorioFuncaoPermissao.criarFuncaoPermissao({
      id,
      id_funcao,
      id_permissao,
    });

    return result;
  }
}

export { CriarFuncaoPermissaoCasoDeUso };