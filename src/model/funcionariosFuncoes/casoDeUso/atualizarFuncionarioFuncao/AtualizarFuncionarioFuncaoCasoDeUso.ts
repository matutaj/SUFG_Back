import { funcionariosFuncoes } from "@prisma/client";
import { DadosFuncionarioFuncao } from "../../repositorioFuncionarioFuncao/IFuncionarioFuncao";
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { FuncaoRepositorio } from "../../../funcoes/repositorioFuncao/implementacoes/RepositorioFuncao";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncionarioFuncaoCasoDeUso {
  async execute({
    id,
    id_funcionario,
    id_funcao,
  }: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioFuncao = new FuncaoRepositorio();

    if (!id) {
      throw new AppError("O ID do funcionário-função é obrigatório para atualização");
    }

    const existeFuncionarioFuncao = await repositorioFuncionarioFuncao.listarUmFuncionarioFuncaoPeloId(id);
    if (!existeFuncionarioFuncao) {
      throw new AppError("Não existe um registro de funcionário-função com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id_funcao);
    if (!existeFuncao) {
      throw new AppError("Não existe uma função com esse id");
    }

    const result = await repositorioFuncionarioFuncao.atualizarFuncionarioFuncao({
      id,
      id_funcionario,
      id_funcao,
    });

    return result;
  }
}

export { AtualizarFuncionarioFuncaoCasoDeUso };