import { tarefas } from "@prisma/client";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class DeleteTarefaCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioTarefa = new TarefaRepositorio();
    await repositorioTarefa.eliminarTarefa(id);
  }
}

export { DeleteTarefaCasoDeUso };