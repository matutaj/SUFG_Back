import { tarefas } from "@prisma/client";
import { DadosTarefas } from "../../repositorioTarefa/ITarefa";
import { TarefaRepositorio } from "../../repositorioTarefa/implementacoes/RepositorioTarefa";
class CriarTarefaCasoDeUso {
  async execute({ nome, descricao }: DadosTarefas): Promise<tarefas> {
    const repositorioTarefa = new TarefaRepositorio();
    const result = await repositorioTarefa.criarTarefa({ nome, descricao });
    return result;
  }
}

export { CriarTarefaCasoDeUso };