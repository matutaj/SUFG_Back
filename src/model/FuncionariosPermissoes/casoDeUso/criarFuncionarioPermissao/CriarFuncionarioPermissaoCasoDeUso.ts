import { funcionariosPermissoes } from "@prisma/client";
import { DadosFuncionarioPermissao } from "../../repositorioFuncionarioPermissao/IFuncionarioPermissao";
import { FuncionarioPermissaoRepositorio } from "../../repositorioFuncionarioPermissao/implementacoes/RepositorioFuncionarioPermissao";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { PermissaoRepositorio } from "../../../permissoes/repositorioPermissao/implementacoes/RepositorioPermissao";
import { AppError } from "../../../../errors/AppError";

class CriarFuncionarioPermissaoCasoDeUso {
  async execute({
    id_funcionario,
    id_permissao,
  }: DadosFuncionarioPermissao): Promise<funcionariosPermissoes> {
    const repositorioFuncionarioPermissao =
      new FuncionarioPermissaoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioPermissao = new PermissaoRepositorio();

    const existeFuncionario =
      await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    const existePermissao = await repositorioPermissao.listarUmaPermissaoPorID(
      id_permissao
    );
    if (!existePermissao) {
      throw new AppError("Não existe uma permissão com esse id");
    }

    const result =
      await repositorioFuncionarioPermissao.criarFuncionarioPermissao({
        id_funcionario,
        id_permissao,
      });

    return result;
  }
}

export { CriarFuncionarioPermissaoCasoDeUso };
