import { Request, Response } from "express";
import { CriarVendaCasoDeUso } from "./CriarVendaCasoDeUso";
import { criarVendaSchema } from "../../../../schema/vendas";
import { AppError } from "../../../../errors/AppError";
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
    if (!await criarVendaSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
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
