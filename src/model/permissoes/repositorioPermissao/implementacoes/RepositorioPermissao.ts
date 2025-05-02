import { permissoes } from "@prisma/client";
import  prisma  from "../../../../prisma/client";
import { DadosPermissao, IPermissao } from "../IPermissao";

class PermissaoRepositorio implements IPermissao {
    async criarPermissao({descricao, nome}: DadosPermissao): Promise<permissoes> {
        const criarPermissao = await prisma.permissoes.create({
            data:{
                descricao,
                nome,
            } });
        return criarPermissao;
    }

    async listarTodasPermissoes(): Promise<permissoes[]> {
        const todasPermissoes = await prisma.permissoes.findMany();
        return todasPermissoes;
    }

    async listarUmaPermissaoPorID(id: string): Promise<permissoes | undefined> {
        const listarUmaPermissaoPorID = await prisma.permissoes.findUnique({ where: { id } }) || undefined;
        return listarUmaPermissaoPorID;
    }

    async atualizarPermissao({descricao, nome, id}: DadosPermissao): Promise<permissoes> {
        const atualizarPermissao = await prisma.permissoes.update({
            where: { id },
            data: {
                descricao,
                nome,
            },
        });
        return atualizarPermissao;
    }
    async eliminarPermissao(id: string): Promise<void> {
        await prisma.permissoes.delete({ where: { id } });
    }
    async listarUmaPermissaoPeloNome(nomePermissao: string): Promise<permissoes | undefined> {
        const listarUmaPermissaoPeloNome = await prisma.permissoes.findFirst({ where: { nome: nomePermissao } }) || undefined;
        return listarUmaPermissaoPeloNome;
    }
}
export {PermissaoRepositorio}