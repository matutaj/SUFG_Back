import { funcionariosTarefas } from "@prisma/client";
import { FuncionarioTarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioFuncionarioTarefa";
class ListarTodosFuncionariosTarefasCasoDeUso {
  async execute(): Promise<funcionariosTarefas[]> {
    const repositorioFuncionarioTarefa = new FuncionarioTarefaRepositorio();
    const result = await repositorioFuncionarioTarefa.listarTodosFuncionariosTarefas();
    return result;
  }
}

export { ListarTodosFuncionariosTarefasCasoDeUso };