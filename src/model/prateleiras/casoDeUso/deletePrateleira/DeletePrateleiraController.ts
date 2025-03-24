import { Request, Response } from "express";
import { DeletePrateleiraCasoDeUso } from "./DeletePrateleiraCasoDeUso";

class DeletePrateleiraController {
  async handle(req: Request, res: Response): Promise<any> {
    const deletePrateleiraCasoDeUso = new DeletePrateleiraCasoDeUso();
    const { id } = req.params;
    const result = await deletePrateleiraCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeletePrateleiraController };
