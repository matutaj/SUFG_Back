import { ListarPrateleiraPeloNomeCasoDeUso } from "./listarPrateleiraPeloNomeCasoDeUso";
import { Request, Response } from "express";
import { listarPrateleiraPeloNome } from "../../../../schema/prateleiras";
class ListarPrateleiraPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const prateleiraCasoDeUso = new ListarPrateleiraPeloNomeCasoDeUso();
    const { nomePrateleira } = req.body;
    if (!listarPrateleiraPeloNome.validate({ nomePrateleira }))
      return res.status(400).json({ message: "Dados inválidos" });
    const result = await prateleiraCasoDeUso.execute(nomePrateleira);
    return res.status(200).json(result);
  }
}
export { ListarPrateleiraPeloNomeController };
