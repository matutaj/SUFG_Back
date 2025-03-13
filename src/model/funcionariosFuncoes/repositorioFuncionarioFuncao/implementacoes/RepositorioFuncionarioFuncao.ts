import { funcionariosFuncoes } from "@prisma/client";
import { DadosFuncionarioFuncao } from "../IFuncionarioFuncao";
import { prisma } from "../../../../prisma/client";

class FuncionarioFuncaoRepositorio {
    async criarFuncionarioFuncao({ID_funcionario, ID_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
        return await prisma.funcionariosFuncoes.create({ data: { ID_funcionario, ID_funcao } }); 
    }
    async listarTodosFuncionariosFuncoes(): Promise<funcionariosFuncoes[]> {
        const listarTodosFuncionariosFuncoes = await prisma.funcionariosFuncoes.findMany();
        return listarTodosFuncionariosFuncoes;
    }
    async listarUmFuncionarioFuncaoPeloId(ID_funcionarioFuncao: string): Promise<funcionariosFuncoes | undefined> {
        const listarUmFuncionarioFuncaoPeloId = await prisma.funcionariosFuncoes.findUnique({ where: { ID_funcionarioFuncao } }) || undefined;
        return listarUmFuncionarioFuncaoPeloId;
    }
    async atualizarFuncionarioFuncao({ID_funcionarioFuncao, ID_funcionario, ID_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
        return await prisma.funcionariosFuncoes.update({ where: { ID_funcionarioFuncao }, data: { ID_funcionario, ID_funcao } });
    }
    async eliminarFuncionarioFuncao(id: string): Promise<void> {
        await prisma.funcionariosFuncoes.delete({ where: { ID_funcionarioFuncao: id } });
    }
}

export { FuncionarioFuncaoRepositorio };