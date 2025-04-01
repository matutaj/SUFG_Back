import { Request, Response } from "express";
import { LoginCasoDeUso } from "./CriarLoginCasodeUso";
import { loginSchema } from "../../schema/login";
import { AppError } from "../../errors/AppError";

class LoginController {
  async handle(req: Request, res: Response): Promise<any> {
    const loginCasoDeUso = new LoginCasoDeUso();

    const { email, senha } = req.body;

    if (!(await loginSchema.isValid(req.body))) {
      throw new AppError("Erro na validação dos dados de login");
    }

    const result = await loginCasoDeUso.execute({
      email,
      senha,
    });

    // Retornar resposta
    return res.status(200).json({
      message: "Login realizado com sucesso",
      result,
    });
  }
}

export { LoginController };
