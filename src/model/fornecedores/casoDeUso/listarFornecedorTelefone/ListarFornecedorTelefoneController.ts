import { Request, Response } from "express";
import { ListarTelefoneFornecedorCasoDeUso } from "./ListarFornecedorTelefoneCasoDeUso";
import { listarFornecedorTelefoneSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class ListarTelefoneFornecedorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneFornecedorCasoDeUso = new ListarTelefoneFornecedorCasoDeUso();
    const { telefoneFornecedor } = req.params;
    if (!await listarFornecedorTelefoneSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarTelefoneFornecedorCasoDeUso.execute(Number(telefoneFornecedor));
    return res.status(200).json(result);
  }
}

export { ListarTelefoneFornecedorController };