import { Request, Response } from "express";
import { AtualizarVendaCasoDeUso } from "./AtualizarVendaCasoDeUso";

class AtualizarVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarVendaCasoDeUso = new AtualizarVendaCasoDeUso();
    const {
      id,
      id_cliente,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      dataEmissao,
      dataValidade,
      valorTotal,
      vendasProdutos,
    } = req.body;
    const result = await atualizarVendaCasoDeUso.execute({
      id,
      id_cliente,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      dataEmissao,
      dataValidade,
      valorTotal,
      vendasProdutos,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarVendaController };