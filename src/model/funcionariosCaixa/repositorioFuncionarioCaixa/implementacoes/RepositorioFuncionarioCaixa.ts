import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../IFuncionarioCaixa";
import { prisma } from "../../../../prisma/client";

class FuncionarioCaixaRepositorio {
    async criarFuncionarioCaixa({estadoCaixa, horarioAbertura, horarioFechamento, quantidadaFaturada, id_caixa, id_funcionario}: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
        return await prisma.funcionariosCaixa.create({ data: { estadoCaixa, horarioAbertura, horarioFechamento, quantidadaFaturada, id_caixa, id_funcionario } });
    }
    async listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]> {
        const listarTodosFuncionariosCaixa = await prisma.funcionariosCaixa.findMany();
        return listarTodosFuncionariosCaixa;
    }
    async listarUmFuncionarioCaixaPeloId(id: string): Promise<funcionariosCaixa | undefined> {
        const listarUmFuncionarioCaixaPeloId = await prisma.funcionariosCaixa.findUnique({ where: { id } }) || undefined
        return listarUmFuncionarioCaixaPeloId;
    }
}
export { FuncionarioCaixaRepositorio };