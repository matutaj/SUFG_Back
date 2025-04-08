import { tarefas } from "@prisma/client";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";

class ListarTodasTarefasCasoDeUso {
  async execute(): Promise<tarefas[]> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.listarTodasTarefas();
    return result;
  }
}

export { ListarTodasTarefasCasoDeUso };