import { permissoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
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

    async listarUmaPermissaoPorID(ID_permissao: string): Promise<permissoes | undefined> {
        const listarUmaPermissaoPorID = await prisma.permissoes.findUnique({ where: { ID_permissao } }) || undefined;
        return listarUmaPermissaoPorID;
    }

    async atualizarPermissao({descricao, nome, ID_permissao}: DadosPermissao): Promise<permissoes> {
        const atualizarPermissao = await prisma.permissoes.update({
            where: { ID_permissao },
            data: {
                descricao,
                nome,
            },
        });
        return atualizarPermissao;
    }
    async eliminarPermissao(ID_permissao: string): Promise<void> {
        await prisma.permissoes.delete({ where: { ID_permissao } });
    }
}
export {PermissaoRepositorio}