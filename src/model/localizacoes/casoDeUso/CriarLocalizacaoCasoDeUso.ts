import { localizacoes, localProduto } from "@prisma/client";
import { DadosLocalizacao } from "../repositorioLocalizacao/ILocalizacao";
import { LocalizacaoRepositorio } from "../repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { CorredorRepositorio } from "../../corredores/repositorioCorredores/implementacoes/RepositorioCorredor";
import { SeccaoRepositorio } from "../../seccoes/repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { PrateleiraRepositorio } from "../../prateleiras/repositorioPrateleira/implementacoes/RepositorioPrateleira";

export interface detalhes {
    nomeLocalizacao: string;
    descricaoLocalizacao: string;
    localProduto: localProduto;
}

export interface dadosRelacionado {
    id_seccao: string;
    id_prateleira: string;
    id_corredor: string;
}

export interface dado {
    detalhes: detalhes;
    dadosRelacionado: dadosRelacionado[];
}

class CriarLocalizacaoCasoDeUso {
    async execute(dado: dado): Promise<localizacoes[]> {
        const localizacaoRepositorio = new LocalizacaoRepositorio();
        const corredorRepositorio = new CorredorRepositorio();
        const seccaoRepositorio = new SeccaoRepositorio();
        const prateleiraRepositorio = new PrateleiraRepositorio();

        // Verifica se há dados relacionados
        if (dado.dadosRelacionado.length === 0) {
            throw new Error("Nenhum dado relacionado fornecido (corredor, seção ou prateleira)");
        }

        const localizacoesCriadas: localizacoes[] = [];

        // Itera sobre cada combinação de corredor, seção e prateleira
        for (const rel of dado.dadosRelacionado) {
            // Verifica se o corredor existe
            const existeIdCorredor = await corredorRepositorio.listarUmCorredorPeloId(rel.id_corredor);
            if (!existeIdCorredor) {
                throw new Error(`Não existe um corredor com o ID ${rel.id_corredor}`);
            }

            // Verifica se a seção existe
            const existeIdSeccao = await seccaoRepositorio.listarUmaSeccaoPeloId(rel.id_seccao);
            if (!existeIdSeccao) {
                throw new Error(`Não existe uma seção com o ID ${rel.id_seccao}`);
            }

            // Verifica se a prateleira existe
            const existeIdPrateleira = await prateleiraRepositorio.listarUmaPrateleiraPeloId(rel.id_prateleira);
            if (!existeIdPrateleira) {
                throw new Error(`Não existe uma prateleira com o ID ${rel.id_prateleira}`);
            }

            // Cria a localização para esta combinação
            const novaLocalizacao = await localizacaoRepositorio.criarLocalizacao({
                nomeLocalizacao: dado.detalhes.nomeLocalizacao,
                descricaoLocalizacao: dado.detalhes.descricaoLocalizacao,
                localProduto: dado.detalhes.localProduto,
                id_corredor: rel.id_corredor,
                id_seccao: rel.id_seccao,
                id_prateleira: rel.id_prateleira,
            });

            localizacoesCriadas.push(novaLocalizacao);
        }

        return localizacoesCriadas; // Retorna todas as localizações criadas
    }
}

export { CriarLocalizacaoCasoDeUso };