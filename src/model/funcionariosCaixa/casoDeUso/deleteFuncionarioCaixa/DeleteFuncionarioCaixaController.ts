import { Request, Response } from "express";
import { DeleteFuncionarioCaixaCasoDeUso } from "./DeleteFuncionarioCaixaCasoDeUso";
import { deletarFuncionarioCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
class DeleteFuncionarioCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioCaixaCasoDeUso = new DeleteFuncionarioCaixaCasoDeUso();
    const { id } = req.params;
    if (!deletarFuncionarioCaixaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await deleteFuncionarioCaixaCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioCaixaController };