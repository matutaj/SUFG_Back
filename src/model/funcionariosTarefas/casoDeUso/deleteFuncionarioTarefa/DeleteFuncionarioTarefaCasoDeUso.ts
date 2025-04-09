import { funcionariosTarefas } from "@prisma/client";
import { FuncionarioTarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioFuncionarioTarefa";
class DeleteFuncionarioTarefaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioFuncionarioTarefa = new FuncionarioTarefaRepositorio();
    await repositorioFuncionarioTarefa.eliminarFuncionarioTarefa(id);
  }
}

export { DeleteFuncionarioTarefaCasoDeUso };