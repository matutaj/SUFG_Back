import { funcoes } from "@prisma/client";
import { FuncaoRepositorio } from "../../repositorioFuncao/implementacoes/RepositorioFuncao";

class ListarTodasFuncoesCasoDeUso {
    async execute (): Promise<funcoes[]> {
        const funcaoRepositorio = new FuncaoRepositorio();
        const todasFuncoes = await funcaoRepositorio.listarTodasFuncoes();
        return todasFuncoes;
    }
}
export { ListarTodasFuncoesCasoDeUso };