import prisma from "../../prisma/client";
import { FuncionarioRepositorio } from "../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { AppError } from "../../errors/AppError";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";

interface RecuperacaoSenhaDados {
  email: string;
}

class RecuperacaoSenhaCasoDeUso {
  async execute({ email }: RecuperacaoSenhaDados): Promise<void> {
    const repositorioFuncionario = new FuncionarioRepositorio();

    // Verificar se o email existe
    const funcionario = await repositorioFuncionario.listarEmailFuncionario(
      email
    );
    if (!funcionario) {
      throw new AppError("Nenhum funcionário encontrado com este email");
    }

    // Gerar um código de recuperação (6 dígitos, por exemplo)
    const codigoRecuperacao = randomBytes(3).toString("hex").toUpperCase(); // Exemplo: A1B2C3
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // Expira em 15 minutos

    // Armazenar o código de recuperação no banco
    await prisma.codigoRecuperacao.create({
      data: {
        codigo: codigoRecuperacao,
        id_funcionario: funcionario.id,
        expiresAt,
      },
    });

    // Configurar o serviço de envio de email (exemplo com Nodemailer)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Exemplo: smtp.gmail.com
      port: Number(process.env.EMAIL_PORT), // Exemplo: 587
      secure: process.env.EMAIL_SECURE === "true", // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS, // Sua senha ou app password
      },
    });

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_FROM || "no-reply@suaempresa.com",
      to: email,
      subject: "Código de Recuperação de Senha",
      text: `Seu código de recuperação de senha é: ${codigoRecuperacao}\nEste código expira em 15 minutos.`,
      html: `
        <h2>Recuperação de Senha</h2>
        <p>Seu código de recuperação de senha é: <strong>${codigoRecuperacao}</strong></p>
        <p>Este código expira em 15 minutos.</p>
        <p>Se você não solicitou esta recuperação, ignore este email.</p>
      `,
    };

    // Enviar o email
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      throw new AppError(
        "Erro ao enviar o email de recuperação. Tente novamente mais tarde."
      );
    }
  }
}

export { RecuperacaoSenhaCasoDeUso };
