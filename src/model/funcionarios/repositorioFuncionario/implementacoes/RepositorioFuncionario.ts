import { funcionarios } from "@prisma/client";
import  prisma  from "../../../../prisma/client";
import { DadosFuncionario, IFuncionario } from "../IFuncionario";

class FuncionarioRepositorio implements IFuncionario {
  async criarFuncionario({
    emailFuncionario,
    nomeFuncionario,
    telefoneFuncionario,
    moradaFuncionario,
    numeroBI,
    senha,
    id_funcao
  }: DadosFuncionario): Promise<funcionarios> {
    const criarFuncionario = await prisma.funcionarios.create({
      data: {
        emailFuncionario,
        nomeFuncionario,
        telefoneFuncionario,
        moradaFuncionario,
        numeroBI,
        senha,
        id_funcao
      },
    });
    return criarFuncionario;
  }
  async listarTodosFuncionarios(): Promise<funcionarios[]> {
    const listarFuncionario = await prisma.funcionarios.findMany();
    return listarFuncionario;
  }
  async listarUmFuncionarioPeloId(
    id: string
  ): Promise<funcionarios | undefined> {
    const listarUmFuncionarioPeloId =
      (await prisma.funcionarios.findUnique({
        where: {
          id,
        },
      })) || undefined;
    return listarUmFuncionarioPeloId;
  }
  async listarUmFuncionarioPeloNome(
    nomeFuncionario: string
  ): Promise<funcionarios | undefined> {
    const listarUmFuncionarioPeloNome =
      (await prisma.funcionarios.findFirst({
        where: {
          nomeFuncionario: nomeFuncionario,
        },
      })) || undefined;
    return listarUmFuncionarioPeloNome;
  }
  async atualizarFuncionario({
    emailFuncionario,
    nomeFuncionario,
    telefoneFuncionario,
    moradaFuncionario,
    numeroBI,
    senha,
    id,
    id_funcao
  }: DadosFuncionario): Promise<funcionarios> {
    const atualizarFuncionario = await prisma.funcionarios.update({
      where: {
        id,
      },
      data: {
        emailFuncionario,
        nomeFuncionario,
        telefoneFuncionario,
        moradaFuncionario,
        numeroBI,
        senha,
        id_funcao
      },
    });
    return atualizarFuncionario;
  }
  async eliminarFuncionario(id: string): Promise<void> {
    await prisma.funcionarios.delete({
      where: {
        id,
      },
    });
  }
  async listarEmailFuncionario(
    emailFuncionario: string
  ): Promise<funcionarios | undefined> {
    const listarEmailFuncionario =
      (await prisma.funcionarios.findFirst({
        where: {
          emailFuncionario: emailFuncionario,
        },
        include: {
          EntradasEstoque: true,
          funcionariosCaixa: true,
          transferencias: true,
          funcoes: true
        },
      })) || undefined;
    return listarEmailFuncionario;
  }
  async listarNumeroContribuinteFuncionario(
    numeroBI: string
  ): Promise<funcionarios | undefined> {
    const listarNumeroContribuinteFuncionario =
      (await prisma.funcionarios.findFirst({
        where: {
          numeroBI: numeroBI,
        },
      })) || undefined;
    return listarNumeroContribuinteFuncionario;
  }
  async listarTelefoneFuncionario(
    telefoneFuncionario: string
  ): Promise<funcionarios | undefined> {
    const listarTelefoneFuncionario =
      (await prisma.funcionarios.findFirst({
        where: {
          telefoneFuncionario: telefoneFuncionario,
        },
      })) || undefined;
    return listarTelefoneFuncionario;
  }
}
export { FuncionarioRepositorio };
