import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";

class ListarFuncionarioPeloNomeCasoDeUso {
    async execute(nomeFuncionario: string): Promise<funcionarios> {
        const repositorioFuncionario = new FuncionarioRepositorio();
        const existeNomeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloNome(nomeFuncionario);
        if (!existeNomeFuncionario) {
            throw new Error("Funcionário não encontrado");
        }
        return existeNomeFuncionario;
    }
}
export { ListarFuncionarioPeloNomeCasoDeUso }