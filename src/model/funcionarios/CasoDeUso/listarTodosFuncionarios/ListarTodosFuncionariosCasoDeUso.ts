import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarTodosFuncionariosCasoDeUso {
    async execute(): Promise<funcionarios[]> {
        const repositorioFuncionario = new FuncionarioRepositorio();
        const result = await repositorioFuncionario.listarTodosFuncionarios();
        return result;
    }
}
export { ListarTodosFuncionariosCasoDeUso };