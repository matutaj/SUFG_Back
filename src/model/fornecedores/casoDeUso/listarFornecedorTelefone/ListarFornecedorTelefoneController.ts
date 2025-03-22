import { Request, Response } from "express";
import { ListarTelefoneFornecedorCasoDeUso } from "./ListarFornecedorTelefoneCasoDeUso";
class ListarTelefoneFornecedorController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneFornecedorCasoDeUso = new ListarTelefoneFornecedorCasoDeUso();
    const { telefoneFornecedor } = req.query;
    const result = await listarTelefoneFornecedorCasoDeUso.execute(Number(telefoneFornecedor));
    return res.status(200).json(result);
  }
}

export { ListarTelefoneFornecedorController };