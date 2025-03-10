import { funcionarios } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DadosFuncionario, IFuncionario } from "../IFuncionario";

class FuncionarioRepositorio implements IFuncionario {
  async criarFuncionario({
    emailFuncionario,
    nomeFuncionario,
    telefoneFuncionario,
    moradaFuncionario,
    numeroBI,
    senha,
  }: DadosFuncionario): Promise<funcionarios> {
    const criarFuncionario = await prisma.funcionarios.create({
      data: {
        emailFuncionario,
        nomeFuncionario,
        telefoneFuncionario,
        moradaFuncionario,
        numeroBI,
        senha,
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
          ID_funcionario: id,
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
    ID_funcionario,
  }: DadosFuncionario): Promise<funcionarios> {
    const atualizarFuncionario = await prisma.funcionarios.update({
      where: {
        ID_funcionario,
      },
      data: {
        emailFuncionario,
        nomeFuncionario,
        telefoneFuncionario,
        moradaFuncionario,
        numeroBI,
        senha,
      },
    });
    return atualizarFuncionario;
  }
  async eliminarFuncionario(id: string): Promise<void> {
    await prisma.funcionarios.delete({
      where: {
        ID_funcionario: id,
      },
    });
  }
}
export { FuncionarioRepositorio };
