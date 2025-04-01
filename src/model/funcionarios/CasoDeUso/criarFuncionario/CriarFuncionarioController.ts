import { CriarFuncionarioCasoDeUso } from "./CriarFuncionarioCasoDeUso";
import { Request, Response } from "express";
import { criarFuncionarioSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class criarFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarFuncionarioCasoDeUso = new CriarFuncionarioCasoDeUso();
    const {
      nomeFuncionario,
      emailFuncionario,
      telefoneFuncionario,
      moradaFuncionario,
      senha,
      numeroBI,
    } = req.body;
    if (!criarFuncionarioSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await criarFuncionarioCasoDeUso.execute({
      nomeFuncionario,
      emailFuncionario,
      telefoneFuncionario,
      moradaFuncionario,
      senha,
      numeroBI,
    });
    return res.status(201).json(result);
  }
}
export { criarFuncionarioController };
