import { Request, Response } from "express";
import { ListarEmailFuncionarioCasoDeUso } from "./listarFuncionarioEmailCasoDeUso";
class ListarEmailFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailFuncionarioCasoDeUso = new ListarEmailFuncionarioCasoDeUso();
    const { emailFuncionario } = req.query;
    const result = await listarEmailFuncionarioCasoDeUso.execute(emailFuncionario as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailFuncionarioController };