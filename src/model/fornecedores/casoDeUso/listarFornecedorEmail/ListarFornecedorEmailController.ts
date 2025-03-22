import { Request, Response } from "express";
import { ListarEmailFornecedorCasoDeUso } from "./ListarFornecedorEmailCasoDeUso";
class ListarEmailFornecedorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailFornecedorCasoDeUso = new ListarEmailFornecedorCasoDeUso();
    const { emailFornecedor } = req.query;
    const result = await listarEmailFornecedorCasoDeUso.execute(emailFornecedor as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailFornecedorController };