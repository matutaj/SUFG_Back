import { Request, Response } from "express";
import { CriarVendaCasoDeUso } from "./CriarVendaCasoDeUso";
import { criarVendaSchema } from "../../../../schema/vendas";
class CriarVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarVendaCasoDeUso = new CriarVendaCasoDeUso();
    const {
      id_cliente,
      dataEmissao,
      dataValidade,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      valorTotal,
      vendasProdutos,
    } = req.body;
    if (!criarVendaSchema.validate(req.body)) return res.status(400).json({});
    const result = await criarVendaCasoDeUso.execute({
      id_cliente,
      dataEmissao,
      dataValidade,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      valorTotal,
      vendasProdutos,
    });
    return res.status(201).json(result);
  }
}
export { CriarVendaController };
