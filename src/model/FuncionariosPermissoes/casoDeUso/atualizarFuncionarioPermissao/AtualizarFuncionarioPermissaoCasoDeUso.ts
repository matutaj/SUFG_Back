import { funcionariosPermissoes } from "@prisma/client";
import { DadosFuncionarioPermissao } from "../../repositorioFuncionarioPermissao/IFuncionarioPermissao";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { PermissaoRepositorio } from "../../../permissoes/repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncionarioPermissaoCasoDeUso {
  async execute({
    id,
    id_funcionario,
    id_permissao,
  }: DadosFuncionarioPermissao): Promise<funcionariosPermissoes> {
    const repositorioFuncionarioPermissao = new FuncionarioPermissaoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioPermissao = new PermissaoRepositorio();

    if (!id) {
      throw new AppError("O ID do funcionário-permissão é obrigatório para atualização");
    }

    const existeFuncionarioPermissao = await repositorioFuncionarioPermissao.listarUmFuncionarioPermissaoPeloId(id);
    if (!existeFuncionarioPermissao) {
      throw new AppError("Não existe um registro de funcionário-permissão com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(id_permissao);
    if (!existePermissao) {
      throw new AppError("Não existe uma permissão com esse id");
    }

    const result = await repositorioFuncionarioPermissao.atualizarFuncionarioPermissao({
      id,
      id_funcionario,
      id_permissao,
    });

    return result;
  }
}

export { AtualizarFuncionarioPermissaoCasoDeUso };