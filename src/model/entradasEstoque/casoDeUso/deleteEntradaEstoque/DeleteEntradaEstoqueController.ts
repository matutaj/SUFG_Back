import { Request, Response } from "express";
import { DeleteEntradaEstoqueCasoDeUso } from "./DeleteEntradaEstoqueCasoDeUso";

class DeleteEntradaEstoqueController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteEntradaEstoqueCasoDeUso = new DeleteEntradaEstoqueCasoDeUso();
    const { id } = req.params;
    const result = await deleteEntradaEstoqueCasoDeUso.execute(id);
    return res.status(204).json(result);
  }
}

export { DeleteEntradaEstoqueController };