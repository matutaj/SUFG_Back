import { Request, Response } from "express";
import { AtualizarVendaCasoDeUso } from "./AtualizarVendaCasoDeUso";
import { atualizarVendaSchema } from "../../../../schema/vendas";
import { AppError } from "../../../../errors/AppError";
class AtualizarVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarVendaCasoDeUso = new AtualizarVendaCasoDeUso();
    const { id } = req.params;
    const {
      id_cliente,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      dataEmissao,
      dataValidade,
      valorTotal,
      vendasProdutos,
    } = req.body;
    if (!await atualizarVendaSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    if (!await atualizarVendaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
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