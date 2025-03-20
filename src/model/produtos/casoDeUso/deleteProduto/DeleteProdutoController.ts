import { Request, Response } from "express";
import { DeleteProdutoCasoDeUso } from "./DeleteProdutoCasoDeUso";

class DeleteProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteProdutoCasoDeUso = new DeleteProdutoCasoDeUso();
    const { id } = req.params;
    const result = await deleteProdutoCasoDeUso.execute(id);
    return res.status(201).json(result);
  }
}

export { DeleteProdutoController };