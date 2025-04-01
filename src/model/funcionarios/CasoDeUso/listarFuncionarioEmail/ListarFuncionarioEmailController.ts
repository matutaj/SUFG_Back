import { Request, Response } from "express";
import { ListarEmailFuncionarioCasoDeUso } from "./ListarFuncionarioEmailCasoDeUso";
import { listarFuncionarioEmailSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class ListarEmailFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailFuncionarioCasoDeUso = new ListarEmailFuncionarioCasoDeUso();
    const { emailFuncionario } = req.query;
    if (!await listarFuncionarioEmailSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarEmailFuncionarioCasoDeUso.execute(emailFuncionario as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailFuncionarioController };