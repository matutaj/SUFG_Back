import { funcionariosCaixa } from "@prisma/client";
import { DadosFuncionarioCaixa, IFuncionarioCaixa } from "../IFuncionarioCaixa";
import  prisma  from "../../../../prisma/client";

class FuncionarioCaixaRepositorio implements IFuncionarioCaixa {
  async criarFuncionarioCaixa({
    estadoCaixa,
    horarioAbertura,
    horarioFechamento,
    quantidadaFaturada,
    id_caixa,
    id_funcionario,
    valorInicial
  }: DadosFuncionarioCaixa): Promise<funcionariosCaixa> {
    return await prisma.funcionariosCaixa.create({
      data: {
        estadoCaixa,
        horarioAbertura,
        horarioFechamento,
        quantidadaFaturada,
        valorInicial,
        id_caixa,
        id_funcionario,
      },
      include: {
        caixas: true,
        Funcionarios: true,
        vendas: true,
      },
    });
  }
  async listarTodosFuncionariosCaixa(): Promise<funcionariosCaixa[]> {
    const listarTodosFuncionariosCaixa =
      await prisma.funcionariosCaixa.findMany({
        include: { caixas: true, Funcionarios: true, vendas: true },
      });
    return listarTodosFuncionariosCaixa;
  }
  async listarEstadoCaixa(
    id_caixa: string
  ): Promise<funcionariosCaixa | undefined> {
    const listarEstadoCaixa =
      (await prisma.funcionariosCaixa.findFirst({ where: { id_caixa } })) ||
      undefined;
    return listarEstadoCaixa;
  }
  async listarUmFuncionarioCaixaPeloId(
    id: string
  ): Promise<funcionariosCaixa | undefined> {
    const listarUmFuncionarioCaixaPeloId =
      (await prisma.funcionariosCaixa.findUnique({ where: { id } })) ||
      undefined;
    return listarUmFuncionarioCaixaPeloId;
  }
  async listarUmFuncionarioCaixaPelaAbertura(
    horarioAbertura: Date
  ): Promise<funcionariosCaixa | undefined> {
    const listarHoraDeAbertura =
      (await prisma.funcionariosCaixa.findFirst({
        where: { horarioAbertura },
      })) || undefined;

    return listarHoraDeAbertura;
  }
  async atualizarFuncionarioCaixa(
    dadosFuncionarioCaixa: Partial<DadosFuncionarioCaixa>
  ): Promise<funcionariosCaixa> {
    const {
      id,
      id_caixa,
      id_funcionario,
      estadoCaixa,
      quantidadaFaturada,
      valorInicial,
      horarioAbertura,
      horarioFechamento,
    } = dadosFuncionarioCaixa;
    return await prisma.funcionariosCaixa.update({
      where: { id },
      data: {
        ...(id_caixa && { id_caixa }),
        ...(id_funcionario && { id_funcionario }),
        ...(estadoCaixa !== undefined && { estadoCaixa }),
        ...(quantidadaFaturada !== undefined && { quantidadaFaturada }),
        ...(valorInicial !== undefined && { valorInicial }),
        ...(horarioAbertura && { horarioAbertura }),
        ...(horarioFechamento && { horarioFechamento }),
      },
    });
  }
  async eliminarFuncionarioCaixa(id: string): Promise<void> {
    await prisma.funcionariosCaixa.delete({ where: { id } });
  }
}

export { FuncionarioCaixaRepositorio };
