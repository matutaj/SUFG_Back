import { Request, Response } from "express";
import { ListarNumeroDeContribuinteCasoDeUso } from "./ListarClientePeloNumeroContribuinteCasoDeUso";
import { listarClienteContribuinteSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class ListarNumeroDeContribuinteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroDeContribuinteCasoDeUso = new ListarNumeroDeContribuinteCasoDeUso();
    const { numeroContribuinte } = req.query;
    if (!listarClienteContribuinteSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarNumeroDeContribuinteCasoDeUso.execute(numeroContribuinte as string);
    return res.status(200).json(result);
  }
}

export { ListarNumeroDeContribuinteController };