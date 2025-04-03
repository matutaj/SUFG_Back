import { Request, Response } from "express";
import { CriarVendaCasoDeUso } from "./CriarVendaCasoDeUso";
import { criarVendaSchema } from "../../../../schema/vendas";
import { AppError } from "../../../../errors/AppError";

class CriarVendaController {
  async handle(req: Request, res: Response): Promise<any> {
    const criarVendaCasoDeUso = new CriarVendaCasoDeUso();

    // Valida os dados usando o schema
    if (!await criarVendaSchema.isValid(req.body)) {
      throw new AppError("Erro na Validação dos dados");
    }

    try {
      const result = await criarVendaCasoDeUso.execute(req.body);
      return res.status(201).json(result);
    } catch (error) {
      throw new AppError(`Erro ao criar venda: ${(error as Error).message}`, 500);
    }
  }
}

export { CriarVendaController };