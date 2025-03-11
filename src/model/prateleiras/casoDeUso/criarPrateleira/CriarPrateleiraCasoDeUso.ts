import { DadosPrateleira } from "../repositorioPrateleira/IPrateleira";
import { PrateleiraRepositorio } from "../repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { prateleiras } from "@prisma/client";
class CriarPrateleiraCasoDeUso {
    async execute({descricaoPrateleira, nomePrateleira}: DadosPrateleira): Promise<prateleiras> {
        const prateleiraRepositorio = new PrateleiraRepositorio()
        const existeNome = await prateleiraRepositorio.listarUmaPrateleiraPeloNome(nomePrateleira);
        if (existeNome) {
            throw new Error('Já existe uma prateleira com esse nome');
        }
        const result = await prateleiraRepositorio.criarPrateleira({descricaoPrateleira, nomePrateleira});
        return result
    }

}
export {CriarPrateleiraCasoDeUso}