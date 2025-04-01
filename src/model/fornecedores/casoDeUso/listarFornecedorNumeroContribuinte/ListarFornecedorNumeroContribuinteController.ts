import { Request, Response } from "express";
import { ListarFornecedorNumeroContribuinteCasoDeUso } from "./ListarFornecedorNumeroContribuinteCasoDeUso";
import { listarFornecedorNumeroContribuinteSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class ListarFornecedorNumeroContribuinteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarNumeroDeContribuinteCasoDeUso = new ListarFornecedorNumeroContribuinteCasoDeUso();
    const { nif } = req.query;
    if (!await listarFornecedorNumeroContribuinteSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarNumeroDeContribuinteCasoDeUso.execute(nif as string);
    return res.status(200).json(result);
  }
}

export { ListarFornecedorNumeroContribuinteController };