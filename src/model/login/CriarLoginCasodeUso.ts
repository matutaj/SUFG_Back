// src/casosDeUso/login/LoginCasoDeUso.ts
import { prisma } from "../../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FuncionarioRepositorio } from "../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../errors/AppError";
import { authConfig } from "../../config/auth";

export interface DadosLogin {
  email: string;
  senha: string;
}

export interface FuncionarioAutenticado {
  nome: string;
  email: string;
  telefone: string;
  numeroBI: string;
  token: string;
  roles: string[]; // Adiciona array de roles
  permissoes: string[]; // Adiciona array de permissões
}

class LoginCasoDeUso {
  async execute({ email, senha }: DadosLogin): Promise<FuncionarioAutenticado> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    const existeEmail = await repositorioFuncionario.listarEmailFuncionario(
      email
    );

    if (!existeEmail) {
      throw new AppError("Não existe Nenhum funcionário com esse email");
    }

    const isPasswordValid = await bcrypt.compare(senha, existeEmail.senha);

    if (!isPasswordValid) {
      throw new AppError("Senha Errada");
    }

    const funcoes = await prisma.funcionariosFuncoes.findMany({
      where: { id_funcionario: existeEmail.id },
      include: { funcoes: true },
    });

    const permissoes = await prisma.funcionariosPermissoes.findMany({
      where: { id_funcionario: existeEmail.id },
      include: { Permissoes: true },
    });

    // Extrair nomes das funções e permissões
    const roles = funcoes.map((funcao) => funcao.funcoes.nome);
    const permissoesNomes = permissoes.map(
      (permissao) => permissao.Permissoes.nome
    );

    // Gerar token JWT com informações do funcionário, roles e permissões
    const tokenPayload = {
      userId: existeEmail.id,
      email: existeEmail.emailFuncionario,
      roles,
      permissoes: permissoesNomes,
    };

    const token = jwt.sign(tokenPayload, authConfig.key, {
      expiresIn: "8h",
    });

    // Retornar dados do funcionário com roles e permissões
    const funcionarioAutenticado: FuncionarioAutenticado = {
      nome: existeEmail.nomeFuncionario,
      email: existeEmail.emailFuncionario,
      telefone: existeEmail.telefoneFuncionario,
      numeroBI: existeEmail.numeroBI,
      token,
      roles, // Inclui as funções
      permissoes: permissoesNomes, // Inclui as permissões
    };

    return funcionarioAutenticado;
  }
}

export { LoginCasoDeUso };
