import { caixas } from "@prisma/client";
import { CaixaRepositorio } from "../../repositorioCaixa/implementacoes/RepositorioCaixa";

class ListarCaixaPeloNomeCasoDeUso {
    async execute(nomeCaixa: string): Promise<caixas> {
        const caixaRepositorio = new CaixaRepositorio();
        const existeNomeCaixa = await caixaRepositorio.listarUmCaixaPeloNome(nomeCaixa);
        if (!existeNomeCaixa) {
            throw new Error('Caixa não encontrado');
        }
        return existeNomeCaixa
    }
}
export { ListarCaixaPeloNomeCasoDeUso}