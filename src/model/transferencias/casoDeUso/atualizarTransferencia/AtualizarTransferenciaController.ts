import { Request, Response } from "express";
import { AtualizarTransferenciaCasoDeUso } from "./AtualizarTransferenciaCasoDeUso";
import { atualizarTransferenciaSchema } from "../../../../schema/transferencias";
import { AppError } from "../../../../errors/AppError";

class AtualizarTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarTransferenciaCasoDeUso = new AtualizarTransferenciaCasoDeUso();
    const { id } = req.params;
    const {
      id_produto,
      id_funcionario,
      id_produtoLocalizacao,
      id_localizacao_origem,
      id_localizacao_destino,
      id_seccao_destino,
      id_prateleira_destino,
      id_corredor_destino,
      quantidadeTransferida,
      dataTransferencia,
    } = req.body;

    if (!await atualizarTransferenciaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    if (!await atualizarTransferenciaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");

    const result = await atualizarTransferenciaCasoDeUso.execute({
      id,
      id_produtoLocalizacao,
      id_produto,
      id_funcionario,
      id_localizacao_origem,
      id_localizacao_destino,
      id_seccao_destino,
      id_prateleira_destino,
      id_corredor_destino,
      quantidadeTransferida,
      dataTransferencia,
    });

    return res.status(200).json(result);
  }
}

export { AtualizarTransferenciaController };