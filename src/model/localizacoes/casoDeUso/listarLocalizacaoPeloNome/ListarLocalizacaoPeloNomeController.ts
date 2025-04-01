import { Request, Response } from "express";
import { ListarUmLocalizacaoPeloNomeCasoDeUso } from "./ListarLocalizacaoPeloNomeCasoDeUso";
import { listarLocalizacaoPeloNome } from "../../../../schema/localizacao";
import { AppError } from "../../../../errors/AppError";
class ListarUmLocalizacaoPeloNomeController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmLocalizacaoPeloNomeCasoDeUso =
      new ListarUmLocalizacaoPeloNomeCasoDeUso();
    const { nomeLocalizacao } = req.query;
    if (!await listarLocalizacaoPeloNome.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmLocalizacaoPeloNomeCasoDeUso.execute(
      nomeLocalizacao as string
    );
    return res.status(200).json(result);
  }
}

export { ListarUmLocalizacaoPeloNomeController };
