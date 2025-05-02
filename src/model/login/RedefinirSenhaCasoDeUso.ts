import prisma from "../../prisma/client";
import { FuncionarioRepositorio } from "../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcrypt";

interface RedefinirSenhaDados {
  email: string;
  codigo: string;
  novaSenha: string;
}

class RedefinirSenhaCasoDeUso {
  async execute({
    email,
    codigo,
    novaSenha,
  }: RedefinirSenhaDados): Promise<void> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    // Verificar se o email existe
    const funcionario = await repositorioFuncionario.listarEmailFuncionario(
      email
    );
    if (!funcionario) {
      throw new AppError("Nenhum funcionário encontrado com este email");
    }

    // Verificar o código de recuperação
    const codigoRecuperacao = await prisma.codigoRecuperacao.findFirst({
      where: {
        codigo,
        id_funcionario: funcionario.id,
        expiresAt: { gte: new Date() }, // Código não expirado
      },
    });

    if (!codigoRecuperacao) {
      throw new AppError("Código de recuperação inválido ou expirado");
    }

    // Hash da nova senha
    const hashedPassword = await bcrypt.hash(novaSenha, 10);

    // Atualizar a senha do funcionário
    await prisma.funcionarios.update({
      where: { id: funcionario.id },
      data: { senha: hashedPassword },
    });

    // Remover o código de recuperação após o uso
    await prisma.codigoRecuperacao.delete({
      where: { id: codigoRecuperacao.id },
    });
  }
}

export { RedefinirSenhaCasoDeUso };
