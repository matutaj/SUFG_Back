import { funcoes } from "@prisma/client";
import { DadosFuncao, IFuncao } from "../IFuncao";
import { prisma } from "../../../../prisma/client";

class FuncaoRepositorio implements IFuncao {
    async criarFuncao({descricao, nome}: DadosFuncao): Promise<funcoes> {
        const criarFuncao = await prisma.funcoes.create({
            data: {
                descricao,
                nome,
            },
        });
        return criarFuncao;
    }

    async listarTodasFuncoes(): Promise<funcoes[]> {
        const listarTodasFuncoes = await prisma.funcoes.findMany();
        return listarTodasFuncoes;
    }

    async listarFuncaoPeloId(id: string): Promise<funcoes | undefined> {
        const listarFuncaoPeloId = await prisma.funcoes.findUnique({ where: { ID_funcao: id } }) || undefined;
        return listarFuncaoPeloId;
    }

    async atualizarFuncao({ID_funcao, descricao, nome}: DadosFuncao): Promise<funcoes> {
        const atualizarFuncao = await prisma.funcoes.update({
            where: { ID_funcao },
            data: {
                descricao,
                nome,
            },
        });
        return atualizarFuncao;
    }
    async eliminarFuncao(id: string): Promise<void> {
        await prisma.funcoes.delete({ where: { ID_funcao: id } });
    }
    

}