import { funcionariosPermissoes } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosFuncionarioPermissao, IFuncionarioPermissao } from "../IFuncionarioPermissao";

class FuncionarioPermissaoRepositorio {
    async criarFuncionarioPermissao({id_funcionario, id_permissao}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes> {
        const funcionarioPermissao = await prisma.funcionariosPermissoes.create({ data: { id_funcionario, id_permissao } });
        return funcionarioPermissao;
    }
    async listarTodosFuncionariosPermissoes(): Promise<funcionariosPermissoes[]> {
        const listarTodosFuncionariosPermissoes = await prisma.funcionariosPermissoes.findMany();
        return listarTodosFuncionariosPermissoes;
    }
    async listarUmFuncionarioPermissaoPeloId(id: string): Promise<funcionariosPermissoes | undefined> {
        const listarUmFuncionarioPermissaoPeloId = await prisma.funcionariosPermissoes.findUnique({ where: { id } }) || undefined
        return listarUmFuncionarioPermissaoPeloId;
    }
    async atualizarFuncionarioPermissao({id_funcionario, id_permissao, id}: DadosFuncionarioPermissao): Promise<funcionariosPermissoes>{
        const atualizarFuncionarioPermissao = await prisma.funcionariosPermissoes.update({
            where: {id},
            data: {
                id_funcionario,
                id_permissao
            }
        })
        return atualizarFuncionarioPermissao
    }
    async eliminarFuncionarioPermissao(id: string): Promise<void>{
        await prisma.funcionariosPermissoes.delete({where:{id}})
    }
}
export {FuncionarioPermissaoRepositorio}