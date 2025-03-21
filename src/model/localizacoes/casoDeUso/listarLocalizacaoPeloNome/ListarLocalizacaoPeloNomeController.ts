import { Request, Response } from "express";
import { ListarUmLocalizacaoPeloNomeCasoDeUso } from "./ListarLocalizacaoPeloNomeCasoDeUso";
class ListarUmLocalizacaoPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmLocalizacaoPeloNomeCasoDeUso = new ListarUmLocalizacaoPeloNomeCasoDeUso();
    const { nomeLocalizacao } = req.query;
    const result = await listarUmLocalizacaoPeloNomeCasoDeUso.execute(nomeLocalizacao as string);
    return res.status(200).json(result);
  }
}

export { ListarUmLocalizacaoPeloNomeController };