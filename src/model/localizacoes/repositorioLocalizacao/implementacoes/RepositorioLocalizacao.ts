import { localizacoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosLocalizacao, ILocalizacao } from "../ILocalizacao";

class LocalizacaoRepositorio implements ILocalizacao {
    async criarLocalizacao({id_seccao, id_prateleira, id_corredor, nomeLocalizacao, descricaoLocalizacao, localProduto}: DadosLocalizacao): Promise<localizacoes> {
        const localizacao = await prisma.localizacoes.create({ 
            data: {
                nomeLocalizacao,
                descricaoLocalizacao,
                localProduto,
                id_corredor,
                id_prateleira,
                id_seccao
        } });
        return localizacao;
    }

    async listarTodosLocalizacoes(): Promise<localizacoes[]> {
        const listarTodosLocalizacoes = await prisma.localizacoes.findMany();
        return listarTodosLocalizacoes;
    }

    async listarUmLocalizacaoPeloId(id: string): Promise<localizacoes | undefined> {
        const listarUmLocalizacaoPeloId = await prisma.localizacoes.findUnique({where: {id}}) || undefined
        return listarUmLocalizacaoPeloId;
    }

    async listarUmLocalizacaoPeloNome(nomeLocalizacao: string): Promise<localizacoes | undefined> {
        const listarUmLocalizacaoPeloNome = await prisma.localizacoes.findFirst({where: {nomeLocalizacao}}) || undefined
        return listarUmLocalizacaoPeloNome;
    }

    async atualizarLocalizacao({id, id_seccao, id_prateleira, id_corredor, nomeLocalizacao, descricaoLocalizacao, localProduto}: DadosLocalizacao): Promise<localizacoes> {   
        const atualizarLocalizacao = await prisma.localizacoes.update({where: {id}, data: {
            seccoes: {
                connect: {id: id_seccao}
            },
            prateleiras: {
                connect: {id: id_prateleira}
            },
            corredores: {
                connect: {id: id_corredor}
            },
            nomeLocalizacao,
            descricaoLocalizacao,
            localProduto
        } });
        return atualizarLocalizacao;
    }

    async eliminarLocalizacao(id: string): Promise<void> {
        await prisma.localizacoes.delete({where: {id}});
    }
}
export {LocalizacaoRepositorio}