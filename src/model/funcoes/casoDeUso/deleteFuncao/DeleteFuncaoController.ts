import { Request, Response } from "express";
import { DeleteFuncaoCasoDeUso } from "./DeleteFuncaoCasoDeUso";

class DeleteFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteFuncaoCasoDeUso = new DeleteFuncaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteFuncaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteFuncaoController };