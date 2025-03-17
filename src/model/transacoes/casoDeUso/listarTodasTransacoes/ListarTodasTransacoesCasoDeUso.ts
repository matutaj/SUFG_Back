import { transacaoes } from "@prisma/client";
import { TransacaoRepositorio } from "../../repositorioTransacao/implementacoes/RepositorioTransacao";

class ListarTodasTransacoesCasoDeUso {
    async execute(): Promise<transacaoes[]> {
        const transacaoRepositorio = new TransacaoRepositorio();
        const todasTransacoes = await transacaoRepositorio.listarTodasTransacoes();
        return todasTransacoes;
    }
}
export {ListarTodasTransacoesCasoDeUso}