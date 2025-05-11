import { CriarTransferenciaCasoDeUso } from "./CriarTransferenciaCasoDeUso";
import { Request, Response } from "express";
import { criarTransferenciaSchema } from "../../../../schema/transferencias";
import { AppError } from "../../../../errors/AppError";
class CriarTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarTransferenciaCasoDeUso = new CriarTransferenciaCasoDeUso();
    const {
      id_funcionario,
      id_produtoLocalizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    } = req.body;
    if (!await criarTransferenciaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await criarTransferenciaCasoDeUso.execute({
      id_funcionario,
      id_produtoLocalizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    });
    return res.status(201).json(result);
  }
}
export { CriarTransferenciaController };
