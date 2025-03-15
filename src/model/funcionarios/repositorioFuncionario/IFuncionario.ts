import { funcionarios } from "@prisma/client";

export interface DadosFuncionario {
  id?: string;
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
  listarTelefoneFuncionario(telefoneFuncionario: string): Promise<funcionarios | undefined>;
  listarEmailFuncionario(emailFuncionario: string): Promise<funcionarios | undefined>;
  listarNumeroContribuinteFuncionario(numeroBI: string): Promise<funcionarios | undefined>;
}
