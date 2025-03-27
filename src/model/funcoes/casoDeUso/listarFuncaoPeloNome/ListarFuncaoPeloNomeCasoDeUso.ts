import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";
import { AppError } from "../../../../errors/AppError";

class ListarFuncaoPeloNomeCasoDeUso{
    async execute (nomeFuncao: string): Promise<funcoes> {
        const funcaoRepositorio = new FuncaoRepositorio();
        const existeNomeFuncao = await funcaoRepositorio.listarFuncaoPeloNome(nomeFuncao);
        if (!existeNomeFuncao) {
            throw new AppError("Funcao não encontrada");
        }
        return existeNomeFuncao;
    }
}
export { ListarFuncaoPeloNomeCasoDeUso };