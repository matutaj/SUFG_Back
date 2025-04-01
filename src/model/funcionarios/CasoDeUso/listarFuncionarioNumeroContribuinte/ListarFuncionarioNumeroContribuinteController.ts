import { Request, Response } from "express";
import { ListarNumeroContribuinteFuncionarioCasoDeUso } from "./ListarFuncionarioNumeroContribuinteCasoDeUso";
import { listarFuncionarioNumeroContribuinteSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class ListarNumeroContribuinteFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroContribuinteFuncionarioCasoDeUso = new ListarNumeroContribuinteFuncionarioCasoDeUso();
    const { numeroBI } = req.query;
    if (!await listarFuncionarioNumeroContribuinteSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarNumeroContribuinteFuncionarioCasoDeUso.execute(numeroBI as string);
    return res.status(200).json(result);
  }
}

export { ListarNumeroContribuinteFuncionarioController };