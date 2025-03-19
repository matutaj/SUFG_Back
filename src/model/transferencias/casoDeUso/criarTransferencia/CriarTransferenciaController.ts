import { CriarTransferenciaCasoDeUso } from "./CriarTransferenciaCasoDeUso";
import { Request, Response } from "express";
import { criarTransferenciaSchema } from "../../../../schema/transferencias";
class CriarTransferenciaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarTransferenciaCasoDeUso = new CriarTransferenciaCasoDeUso();
    const {
      id_funcionario,
      id_localizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    } = req.body;
    if (!criarTransferenciaSchema.validate(req.body)) return res.status(400).json({});
    const result = await criarTransferenciaCasoDeUso.execute({
      id_funcionario,
      id_localizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    });
    return res.status(201).json(result);
  }
}
export { CriarTransferenciaController };
