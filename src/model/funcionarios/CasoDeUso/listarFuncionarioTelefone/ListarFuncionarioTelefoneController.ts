import { Request, Response } from "express";
import { ListarTelefoneFuncionarioCasoDeUso } from "./ListarFuncionarioTelefoneCasoDeUso";
import { listarFuncionarioTelefoneSchema } from "../../../../schema/funcionarios";
import { AppError } from "../../../../errors/AppError";
class ListarTelefoneFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneFuncionarioCasoDeUso = new ListarTelefoneFuncionarioCasoDeUso();
    const { telefoneFuncionario } = req.query;
    if (!listarFuncionarioTelefoneSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarTelefoneFuncionarioCasoDeUso.execute(telefoneFuncionario as string);
    return res.status(200).json(result);
  }
}

export { ListarTelefoneFuncionarioController };