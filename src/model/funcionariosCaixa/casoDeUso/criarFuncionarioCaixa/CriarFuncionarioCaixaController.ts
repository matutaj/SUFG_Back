import { Request, Response } from "express";
import { CriarFuncionarioCaixaCasodeUso } from "./CriarFuncionarioCaixaCasoDeUso";
import { criarFuncionarioCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
class CriarFuncionarioCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const funcionarioCaixaCasoDeUso = new CriarFuncionarioCaixaCasodeUso();



    if (!(await criarFuncionarioCaixaSchema.isValid(req.body)))
      throw new AppError("Erro na Validação dos dados");

    const result = await funcionarioCaixaCasoDeUso.execute(req.body);
    return res.status(201).json(result);
  }
}
export { CriarFuncionarioCaixaController };
