import { Request, Response } from "express";
import { ListarUmFornecedorPeloIdCasoDeUso } from "./ListarFornecedorPeloIdCasoDeUso";
class ListarUmFornecedorPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFornecedorPeloIdCasoDeUso = new ListarUmFornecedorPeloIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmFornecedorPeloIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmFornecedorPeloIdController };