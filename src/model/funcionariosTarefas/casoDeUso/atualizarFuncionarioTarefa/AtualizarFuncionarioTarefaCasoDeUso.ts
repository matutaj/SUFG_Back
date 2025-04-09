import { funcionariosTarefas } from "@prisma/client";
import { DadosFuncionarioTarefa } from "../../repositorioTarefa/IFuncionarioTarefa";
import { FuncionarioTarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioFuncionarioTarefa";
class AtualizarFuncionarioTarefaCasoDeUso {
  async execute({ id, id_funcionario, id_tarefa }: DadosFuncionarioTarefa): Promise<funcionariosTarefas> {
    const repositorioFuncionarioTarefa = new FuncionarioTarefaRepositorio();
    const result = await repositorioFuncionarioTarefa.atualizarFuncionarioTarefa({ id, id_funcionario, id_tarefa });
    return result;
  }
}

export { AtualizarFuncionarioTarefaCasoDeUso };