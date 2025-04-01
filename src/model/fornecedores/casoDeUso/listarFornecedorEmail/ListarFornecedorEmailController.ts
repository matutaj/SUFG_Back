import { Request, Response } from "express";
import { ListarEmailFornecedorCasoDeUso } from "./ListarFornecedorEmailCasoDeUso";
import { listarFornecedorEmailSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class ListarEmailFornecedorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailFornecedorCasoDeUso = new ListarEmailFornecedorCasoDeUso();
    const { emailFornecedor } = req.query;
    if (!await listarFornecedorEmailSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarEmailFornecedorCasoDeUso.execute(emailFornecedor as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailFornecedorController };