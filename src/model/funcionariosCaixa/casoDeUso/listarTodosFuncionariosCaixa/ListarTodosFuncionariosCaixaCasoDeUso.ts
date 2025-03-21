import { funcionariosCaixa } from "@prisma/client";
import { FuncionarioCaixaRepositorio } from "../../repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";

class ListarTodosFuncionariosCaixaCasoDeUso {
  async execute(): Promise<funcionariosCaixa[]> {
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();
    const result = await repositorioFuncionarioCaixa.listarTodosFuncionariosCaixa();
    return result;
  }
}

export { ListarTodosFuncionariosCaixaCasoDeUso };