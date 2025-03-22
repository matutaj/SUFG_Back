import { Request, Response } from "express";
import { ListarFornecedorNumeroContribuinteCasoDeUso } from "./ListarFornecedorNumeroContribuinteCasoDeUso";
class ListarFornecedorNumeroContribuinteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroDeContribuinteCasoDeUso = new ListarFornecedorNumeroContribuinteCasoDeUso();
    const { nif } = req.query;
    const result = await listarNumeroDeContribuinteCasoDeUso.execute(nif as string);
    return res.status(200).json(result);
  }
}

export { ListarFornecedorNumeroContribuinteController };