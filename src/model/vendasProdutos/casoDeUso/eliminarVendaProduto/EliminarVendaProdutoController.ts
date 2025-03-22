import { Request, Response } from "express";
import { DeleteVendaProdutoCasoDeUso } from "./EliminarVendaProdutoCasoDeUso";
class DeleteVendaProdutoController {
  async handle(req: Request, res: Response): Promise<any> {
    const deleteVendaProdutoCasoDeUso = new DeleteVendaProdutoCasoDeUso();
    const { id } = req.params;
    const result = await deleteVendaProdutoCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { DeleteVendaProdutoController };