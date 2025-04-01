// src/casosDeUso/login/LoginCasoDeUso.ts
import { funcionarios } from "@prisma/client";
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


    const token = jwt.sign({ ...existeEmail }, authConfig.key, {
      expiresIn: "8h",
    });

    const funcionarioAutenticado: FuncionarioAutenticado = {
      ...existeEmail,
      nome: existeEmail.nomeFuncionario, // Remover senha do retorno
      telefone: existeEmail.telefoneFuncionario,
      numeroBI: existeEmail.numeroBI,
      token: token,
      email: existeEmail.emailFuncionario,
    };

    return funcionarioAutenticado;
  }
}

export { LoginCasoDeUso };
