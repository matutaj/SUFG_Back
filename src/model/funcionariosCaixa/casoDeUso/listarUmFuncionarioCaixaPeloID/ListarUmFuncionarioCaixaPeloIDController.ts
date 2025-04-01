import { Request, Response } from "express";
import { ListarUmFuncionarioCaixaPeloIdCasoDeUso } from "./ListarUmFuncionarioCaixaPeloIDCasoDeUso";
import { listarFuncionarioCaixaPeloIdCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioCaixaPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioCaixaPeloIdCasoDeUso = new ListarUmFuncionarioCaixaPeloIdCasoDeUso();
    const { id } = req.params;
    if (!await listarFuncionarioCaixaPeloIdCaixaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioCaixaPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioCaixaPeloIdController };