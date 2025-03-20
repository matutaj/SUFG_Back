import { Request, Response } from "express";
import { DeleteSeccaoCasoDeUso } from "./DeleteSeccaoCasoDeUso";

class DeleteSeccaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteSeccaoCasoDeUso = new DeleteSeccaoCasoDeUso();
    const { id } = req.params;
    const result = await deleteSeccaoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteSeccaoController };