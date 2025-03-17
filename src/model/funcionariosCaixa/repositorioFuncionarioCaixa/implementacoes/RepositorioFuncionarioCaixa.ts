import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa,IFuncionarioCaixa } from "../IFuncionarioCaixa";
import { prisma } from "../../../../prisma/client";

class FuncionarioCaixaRepositorio  implements IFuncionarioCaixa{
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
     async listarUmFuncionarioCaixaPelaAbertura(horarioAbertura: Date): Promise<funcionariosCaixa | undefined> {
        const listarHoraDeAbertura = await prisma.funcionariosCaixa.findFirst({where:{horarioAbertura}}) || undefined;
        
        return listarHoraDeAbertura;
    }
}
export { FuncionarioCaixaRepositorio };
