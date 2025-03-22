import { Request, Response } from "express";
import { AtualizarTransferenciaCasoDeUso } from "./AtualizarTransferenciaCasoDeUso";

class AtualizarTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarTransferenciaCasoDeUso = new AtualizarTransferenciaCasoDeUso();
    const {
      id,
      id_produto,
      id_funcionario,
      id_localizacao,
      dataTransferencia,
      quantidadeTransferida,
    } = req.body;
    const result = await atualizarTransferenciaCasoDeUso.execute({
      id,
      id_produto,
      id_funcionario,
      id_localizacao,
      dataTransferencia,
      quantidadeTransferida,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarTransferenciaController };