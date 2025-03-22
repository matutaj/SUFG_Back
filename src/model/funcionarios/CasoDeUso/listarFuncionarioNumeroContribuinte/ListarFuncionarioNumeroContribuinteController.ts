import { Request, Response } from "express";
import { ListarNumeroContribuinteFuncionarioCasoDeUso } from "./ListarFuncionarioNumeroContribuinteCasoDeUso";
class ListarNumeroContribuinteFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroContribuinteFuncionarioCasoDeUso = new ListarNumeroContribuinteFuncionarioCasoDeUso();
    const { numeroBI } = req.query;
    const result = await listarNumeroContribuinteFuncionarioCasoDeUso.execute(numeroBI as string);
    return res.status(200).json(result);
  }
}

export { ListarNumeroContribuinteFuncionarioController };