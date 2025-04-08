import { tarefas } from "@prisma/client";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class ListarTarefaPeloNomeCasoDeUso {
  async execute(nome: string): Promise<tarefas | undefined> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.listarTarefaPeloNome(nome);
    return result;
  }
}

export { ListarTarefaPeloNomeCasoDeUso };