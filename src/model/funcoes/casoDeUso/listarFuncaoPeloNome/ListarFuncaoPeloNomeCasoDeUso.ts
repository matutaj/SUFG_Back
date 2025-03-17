import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";

class ListarFuncaoPeloNomeCasoDeUso{
    async execute (nomeFuncao: string): Promise<funcoes> {
        const funcaoRepositorio = new FuncaoRepositorio();
        const existeNomeFuncao = await funcaoRepositorio.listarFuncaoPeloNome(nomeFuncao);
        if (!existeNomeFuncao) {
            throw new Error("Funcao não encontrada");
        }
        return existeNomeFuncao;
    }
}
export { ListarFuncaoPeloNomeCasoDeUso };