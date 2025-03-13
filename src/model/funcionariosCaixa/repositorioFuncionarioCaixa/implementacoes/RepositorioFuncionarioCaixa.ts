import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa } from "../IFuncionarioCaixa";
import { prisma } from "../../../../prisma/client";

class FuncionarioCaixaRepositorio {
    async criarFuncionarioCaixa({estadoCaixa, horarioAbertura, horarioFechamento, quantidadaFaturada, ID_caixa, ID_funcionario}: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
        return await prisma.funcionariosCaixa.create({ data: { estadoCaixa, horarioAbertura, horarioFechamento, quantidadaFaturada, ID_caixa, ID_funcionario } });
    }
    async listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]> {
        const listarTodosFuncionariosCaixa = await prisma.funcionariosCaixa.findMany();
        return listarTodosFuncionariosCaixa;
    }
    async listarUmFuncionarioCaixaPeloId(ID_funcionarioCaixa: string): Promise<funcionariosCaixa | undefined> {
        const listarUmFuncionarioCaixaPeloId = await prisma.funcionariosCaixa.findUnique({ where: { ID_funcionarioCaixa } }) || undefined
        return listarUmFuncionarioCaixaPeloId;
    }
}
export { FuncionarioCaixaRepositorio };