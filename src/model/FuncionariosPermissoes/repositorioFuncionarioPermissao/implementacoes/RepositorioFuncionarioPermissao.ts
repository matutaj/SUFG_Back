import { funcionariosPermissoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosFuncionarioPermissao, IFuncionarioPermissao } from "../IFuncionarioPermissao";

class FuncionarioPermissaoRepositorio {
    async criarFuncionarioPermissao({ID_funcionario, ID_permissao}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes> {
        const funcionarioPermissao = await prisma.funcionariosPermissoes.create({ data: { ID_funcionario, ID_permissao } });
        return funcionarioPermissao;
    }
    async listarTodosFuncionariosPermissoes(): Promise<funcionariosPermissoes[]> {
        const listarTodosFuncionariosPermissoes = await prisma.funcionariosPermissoes.findMany();
        return listarTodosFuncionariosPermissoes;
    }
    async listarUmFuncionarioPermissaoPeloId(ID_funcionarioPermissao: string): Promise<funcionariosPermissoes | undefined> {
        const listarUmFuncionarioPermissaoPeloId = await prisma.funcionariosPermissoes.findUnique({ where: { ID_funcionarioPermissao } }) || undefined
        return listarUmFuncionarioPermissaoPeloId;
    }
    async atualizarFuncionarioPermissao({ID_funcionario, ID_permissao, ID_funcionarioPermissao}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>{
        const atualizarFuncionarioPermissao = await prisma.funcionariosPermissoes.update({
            where: {ID_funcionarioPermissao},
            data: {
                ID_funcionario,
                ID_permissao
            }
        })
        return atualizarFuncionarioPermissao
    }
    async eliminarFuncionarioPermissao(ID_funcionarioPermissao: string): Promise<void>{
        await prisma.funcionariosPermissoes.delete({where:{ID_funcionarioPermissao}})
    }
}
export {FuncionarioPermissaoRepositorio}