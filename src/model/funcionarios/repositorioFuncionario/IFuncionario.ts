import { funcionarios } from "@prisma/client";

export interface DadosFuncionario {
  ID_funcionario?: string;
  numeroBI: string;
  nomeFuncionario: string;
  senha: string;
  moradaFuncionario: string;
  telefoneFuncionario: string;
  emailFuncionario: string;
}

export interface IFuncionario {
  criarFuncionario({}: DadosFuncionario): Promise<funcionarios>;
  listarTodosFuncionarios(): Promise<funcionarios[]>;
  listarUmFuncionarioPeloId(id: string): Promise<funcionarios | undefined>;
  listarUmFuncionarioPeloNome(
    nomeFuncionario: string
  ): Promise<funcionarios | undefined>;
  atualizarFuncionario({}: DadosFuncionario): Promise<funcionarios>;
  eliminarFuncionario(id: string): Promise<void>;
}
