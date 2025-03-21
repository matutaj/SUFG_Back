import { funcionariosFuncoes } from "@prisma/client";
import { FuncionarioFuncaoRepositorio } from "../../repositorioFuncionarioFuncao/implementacoes/RepositorioFuncionarioFuncao";

class ListarTodosFuncionariosFuncoesCasoDeUso {
  async execute(): Promise<funcionariosFuncoes[]> {
    const repositorioFuncionarioFuncao = new FuncionarioFuncaoRepositorio();
    const result = await repositorioFuncionarioFuncao.listarTodosFuncionariosFuncoes();
    return result;
  }
}

export { ListarTodosFuncionariosFuncoesCasoDeUso };