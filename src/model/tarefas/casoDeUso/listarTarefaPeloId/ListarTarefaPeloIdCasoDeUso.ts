import { tarefas } from "@prisma/client";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class ListarTarefaPeloIdCasoDeUso {
  async execute(id: string): Promise<tarefas | undefined> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.listarTarefaPeloId(id);
    return result;
  }
}

export { ListarTarefaPeloIdCasoDeUso };