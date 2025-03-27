import { funcionarios } from "@prisma/client";
import { FuncionarioRepositorio } from "../../repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../../../errors/AppError";

class ListarFuncionarioPeloNomeCasoDeUso {
    async execute(nomeFuncionario: string): Promise<funcionarios> {
        const repositorioFuncionario = new FuncionarioRepositorio();
        const existeNomeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloNome(nomeFuncionario);
        if (!existeNomeFuncionario) {
            throw new AppError("Funcionário não encontrado");
        }
        return existeNomeFuncionario;
    }
}
export { ListarFuncionarioPeloNomeCasoDeUso }