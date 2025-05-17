import { CriarTransferenciaCasoDeUso } from "./CriarTransferenciaCasoDeUso";
import { Request, Response } from "express";
import { criarTransferenciaSchema } from "../../../../schema/transferencias";
import { AppError } from "../../../../errors/AppError";

class CriarTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarTransferenciaCasoDeUso = new CriarTransferenciaCasoDeUso();
    const {
      id_funcionario,
      id_produto,
      id_produtoLocalizacao,
      id_localizacao_origem,
      id_localizacao_destino,
      id_seccao_destino,
      id_prateleira_destino,
      id_corredor_destino,
      quantidadeTransferida,
      dataTransferencia,
    } = req.body;

    if (!await criarTransferenciaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");

    const result = await criarTransferenciaCasoDeUso.execute({
      id_funcionario,
      id_produtoLocalizacao,
      id_produto,
      id_localizacao_origem,
      id_localizacao_destino,
      id_seccao_destino,
      id_prateleira_destino,
      id_corredor_destino,
      quantidadeTransferida,
      dataTransferencia: new Date(dataTransferencia),
    });

    return res.status(201).json(result);
  }
}

export { CriarTransferenciaController };