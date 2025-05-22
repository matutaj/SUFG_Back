import prisma from "../../prisma/client";
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
  id: string;
  nome: string;
  email: string;
  telefone: string;
  numeroBI: string;
  token: string;
  role?: string;
}

class LoginCasoDeUso {
  async execute({ email, senha }: DadosLogin): Promise<FuncionarioAutenticado> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    const existeEmail = await repositorioFuncionario.listarEmailFuncionario(
      email
    );

    if (!existeEmail) {
      throw new AppError("Não existe nenhum funcionário com esse email", 404);
    }

    const isPasswordValid = await bcrypt.compare(senha, existeEmail.senha);

    if (!isPasswordValid) {
      throw new AppError("Senha incorreta", 401);
    }

    // Buscar a função do funcionário
    const funcao = await prisma.funcionarios.findFirst({
      where: { id: existeEmail.id },
      include: { funcoes: true },
    });

    if (!funcao) {
      throw new AppError("Nenhuma função associada ao funcionário", 400);
    }

    const role = funcao.funcoes?.nome;
    const id_funcao = funcao.funcoes?.id;
    const tokenPayload = {
      userId: existeEmail.id,
      email: existeEmail.emailFuncionario,
      nome: existeEmail.nomeFuncionario,
      role,
      id_funcao,
    };

    const token = jwt.sign(tokenPayload, authConfig.key, {
      expiresIn: "8h",
    });

    const funcionarioAutenticado: FuncionarioAutenticado = {
      id: existeEmail.id,
      nome: existeEmail.nomeFuncionario,
      email: existeEmail.emailFuncionario,
      telefone: existeEmail.telefoneFuncionario,
      numeroBI: existeEmail.numeroBI,
      token,
      role,
    };

    return funcionarioAutenticado;
  }
}

export { LoginCasoDeUso };
