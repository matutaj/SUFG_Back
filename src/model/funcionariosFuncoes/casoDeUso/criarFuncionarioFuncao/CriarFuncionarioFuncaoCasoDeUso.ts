import { funcionariosFuncoes } from "@prisma/client";
import { DadosFuncionarioFuncao } from "../../repositorioFuncionarioFuncao/IFuncionarioFuncao"; 
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao"; 
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario"; 
import { FuncaoRepositorio } from "../../../funcoes/repositorioFuncao/implementacoes/RepositorioFuncao"; 

class CriarFuncionarioFuncaoCasoDeUso {
  async execute({
    id_funcionario,
    id_funcao,
  }: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioFuncao = new FuncaoRepositorio();

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new Error("Não existe um funcionário com esse id");
    }

    const existeFuncao = await repositorioFuncao.listarFuncaoPeloId(id_funcao);
    if (!existeFuncao) {
      throw new Error("Não existe uma função com esse id");
    }

    const associacaoExistente = await repositorioFuncionarioFuncao.listarUmFuncionarioFuncaoPeloId(
      id_funcionario,
      id_funcao
    );
    if (associacaoExistente) {
      throw new Error("Esse funcionário já está associado a essa função");
    }

    const result = await repositorioFuncionarioFuncao.criarFuncionarioFuncao({
      id_funcionario,
      id_funcao,
    });

    return result;
  }
}

export { CriarFuncionarioFuncaoCasoDeUso };