import { Request, Response } from "express";
import { ListarNumeroDeContribuinteCasoDeUso } from "./ListarClientePeloNumeroContribuinteCasoDeUso";
class ListarNumeroDeContribuinteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroDeContribuinteCasoDeUso = new ListarNumeroDeContribuinteCasoDeUso();
    const { numeroContribuinte } = req.query;
    const result = await listarNumeroDeContribuinteCasoDeUso.execute(numeroContribuinte as string);
    return res.status(200).json(result);
  }
}

export { ListarNumeroDeContribuinteController };