import { funcoesPermissoes } from "@prisma/client";
import { DadosFuncaoPermissao, IFuncaoPermissao } from "../IFuncaoPermissao";
import { prisma } from "../../../../prisma/client";

class FuncaoPermissaoRepositorio implements IFuncaoPermissao {
    async criarFuncaoPermissao({ID_funcao, ID_permissao}: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
        const criarFuncaoPermissao = await prisma.funcoesPermissoes.create({
            data: {
                ID_funcao,
                ID_permissao,
            },
        });
        return criarFuncaoPermissao;
    }
    async listarTodasFuncoesPermissoes(): Promise<funcoesPermissoes[]> {
        const listarTodasFuncoesPermissoes = await prisma.funcoesPermissoes.findMany();
        return listarTodasFuncoesPermissoes;
    }
    async listarUmaFuncaoPermissaoPeloId(ID_funcaoPermissao: string): Promise<funcoesPermissoes | undefined> {
        const listarUmaFuncaoPermissaoPeloId = await prisma.funcoesPermissoes.findUnique({ where: { ID_funcaoPermissao } }) || undefined;
        return listarUmaFuncaoPermissaoPeloId;   
    }
    async atualizarFuncaoPermissao({ ID_funcao, ID_permissao}: DadosFuncaoPermissao): Promise<funcoesPermissoes> {
        const atualizarFuncaoPermissao = await prisma.funcoesPermissoes.update({
            where: {
                ID_funcaoPermissao: ID_funcao,
            },
            data: {
                ID_funcao,
                ID_permissao,
            },
        });
        return atualizarFuncaoPermissao;
    }
    async eliminarFuncaoPermissao(ID_funcaoPermissao: string): Promise<void> {
        await prisma.funcoesPermissoes.delete({ where: { ID_funcaoPermissao } });
    }
}
export {FuncaoPermissaoRepositorio}