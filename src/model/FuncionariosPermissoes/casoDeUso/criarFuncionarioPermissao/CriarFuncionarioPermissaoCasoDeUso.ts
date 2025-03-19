import { funcionariosPermissoes } from "@prisma/client";
import { DadosFuncionarioPermissao } from "../../repositorioFuncionarioPermissao/IFuncionarioPermissao"; 
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao"; 
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario"; 
import { PermissaoRepositorio } from "../../../permissoes/repositorioPermissao/implementacoes/RepositorioPermissao"; 

class CriarFuncionarioPermissaoCasoDeUso {
  async execute({
    id,
    id_funcionario,
    id_permissao,
  }: DadosFuncionarioPermissao): Promise<funcionariosPermissoes> {
    const repositorioFuncionarioPermissao = new FuncionarioPermissaoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioPermissao = new PermissaoRepositorio();

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id_permissao);
    if (!existePermissao) {
      throw new Error("Não existe uma permissão com esse id");
    }

    const associacaoExistente = await repositorioFuncionarioPermissao.listarUmFuncionarioPermissaoPeloId(
      id_funcionario,
      id_permissao
    );
    if (associacaoExistente) {
      throw new Error("Esse funcionário já possui essa permissão");
    }

    const result = await repositorioFuncionarioPermissao.criarFuncionarioPermissao({
      id,
      id_funcionario,
      id_permissao,
    });

    return result;
  }
}

export { CriarFuncionarioPermissaoCasoDeUso };