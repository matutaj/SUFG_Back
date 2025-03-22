import { Request, Response } from "express";
import { ListarUmaTransferenciaPorIdCasoDeUso } from "./ListarTransferenciaPeloIdCasoDeUso";
class ListarUmaTransferenciaPorIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaTransferenciaPorIdCasoDeUso = new ListarUmaTransferenciaPorIdCasoDeUso();
    const { id } = req.params;
    const result = await listarUmaTransferenciaPorIdCasoDeUso.execute(id);
    return res.status(200).json(result);
  }
}

export { ListarUmaTransferenciaPorIdController };