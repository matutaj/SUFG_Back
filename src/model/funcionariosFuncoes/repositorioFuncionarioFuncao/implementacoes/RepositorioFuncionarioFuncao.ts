import { funcionariosFuncoes } from "@prisma/client";
import { DadosFuncionarioFuncao } from "../IFuncionarioFuncao";
import  prisma  from "../../../../prisma/client";

class FuncionarioFuncaoRepositorio {
    async criarFuncionarioFuncao({id_funcionario, id_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
        return await prisma.funcionariosFuncoes.create({ data: { id_funcionario, id_funcao } }); 
    }
    async listarTodosFuncionariosFuncoes(): Promise<funcionariosFuncoes[]> {
        const listarTodosFuncionariosFuncoes = await prisma.funcionariosFuncoes.findMany();
        return listarTodosFuncionariosFuncoes;
    }
    async listarUmFuncionarioFuncaoPeloId(id: string): Promise<funcionariosFuncoes | undefined> {
        const listarUmFuncionarioFuncaoPeloId = await prisma.funcionariosFuncoes.findUnique({ where: { id } }) || undefined;
        return listarUmFuncionarioFuncaoPeloId;
    }
    async atualizarFuncionarioFuncao({id, id_funcionario, id_funcao}: DadosFuncionarioFuncao): Promise<funcionariosFuncoes> {
        return await prisma.funcionariosFuncoes.update({ where: { id }, data: { id_funcionario, id_funcao } });
    }
    async eliminarFuncionarioFuncao(id: string): Promise<void> {
        await prisma.funcionariosFuncoes.delete({ where: { id } });
    }
}

export { FuncionarioFuncaoRepositorio };