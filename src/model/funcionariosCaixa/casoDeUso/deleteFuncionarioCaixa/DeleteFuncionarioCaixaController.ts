import { Request, Response } from "express";
import { DeleteFuncionarioCaixaCasoDeUso } from "./DeleteFuncionarioCaixaCasoDeUso";

class DeleteFuncionarioCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncionarioCaixaCasoDeUso = new DeleteFuncionarioCaixaCasoDeUso();
    const { id } = req.params;
    const result = await deleteFuncionarioCaixaCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteFuncionarioCaixaController };