import { seccoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosSeccao, ISeccao } from "../ISeccao";

class SeccaoRepositorio implements ISeccao {
    
    async criarSeccao({nomeSeccao, descricaoSeccao}: DadosSeccao): Promise<seccoes> {
        const criarSeccao = await prisma.seccoes.create({
            data: { nomeSeccao, descricaoSeccao },
        });
        return criarSeccao;
    }

    async listarTodasSeccoes(): Promise<seccoes[]> {
        const listarTodasSeccoes = await prisma.seccoes.findMany();
        return listarTodasSeccoes;
    }

    async listarUmaSeccaoPeloId(id: string): Promise<seccoes | undefined> {
        const listarUmSeccaoPeloId = await prisma.seccoes.findUnique({ where: { ID_seccao: id } }) || undefined
        return listarUmSeccaoPeloId;
    }

    async listarUmaSeccaoPeloNome(nomeSeccao: string): Promise<seccoes | undefined> {
        const listarUmSeccaoPeloNome = await prisma.seccoes.findFirst({ where: { nomeSeccao } }) || undefined
        return listarUmSeccaoPeloNome;
    }

    async atualizarSeccao({ID_seccao, nomeSeccao, descricaoSeccao}: DadosSeccao): Promise<seccoes> {
        const atualizarSeccao = await prisma.seccoes.update({ where: { ID_seccao }, data: { nomeSeccao, descricaoSeccao } });
        return atualizarSeccao;
    }

    async eliminarSeccao(id: string): Promise<void> {
        await prisma.seccoes.delete({ where: { ID_seccao: id } });
    }
    
}
export { SeccaoRepositorio };