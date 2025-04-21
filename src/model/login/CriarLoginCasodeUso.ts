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
  roles: string[];
  permissoes: string[];
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

    const roles = funcoes.map((funcao) => funcao.funcoes.nome);
    const permissoesNomes = permissoes.map(
      (permissao) => permissao.Permissoes.nome
    );

    const tokenPayload = {
      userId: existeEmail.id,
      email: existeEmail.emailFuncionario,
      roles,
      permissoes: permissoesNomes,
    };

    const token = jwt.sign(tokenPayload, authConfig.key, {
      expiresIn: "8h",
    });

    const funcionarioAutenticado: FuncionarioAutenticado = {
      nome: existeEmail.nomeFuncionario,
      email: existeEmail.emailFuncionario,
      telefone: existeEmail.telefoneFuncionario,
      numeroBI: existeEmail.numeroBI,
      token,
      roles,
      permissoes: permissoesNomes,
    };

    return funcionarioAutenticado;
  }
}

export { LoginCasoDeUso };
