import { Request, Response } from "express";
import { AtualizarFuncionarioCaixaCasoDeUso } from "./AtualizarFuncionarioCaixaCasoDeUso";
import { atualizarFuncionarioCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
import * as yup from 'yup';

class AtualizarFuncionarioCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioCaixaCasoDeUso = new AtualizarFuncionarioCaixaCasoDeUso();
    const {
      id_caixa,
      id_funcionario,
      estadoCaixa,
      quantidadaFaturada,
      horarioAbertura,
      horarioFechamento,
    } = req.body;
    const { id } = req.params;

    // Validar ID separadamente
    const idSchema = yup.string().uuid().required();
    if (!await idSchema.isValid(id)) {
      throw new AppError("ID inválido");
    }

    // Validar corpo da requisição
    if (!await atualizarFuncionarioCaixaSchema.isValid(req.body)) {
      console.log('Corpo da requisição:', JSON.stringify(req.body, null, 2));
      throw new AppError("Erro na validação dos dados do corpo da requisição");
    }

    const result = await atualizarFuncionarioCaixaCasoDeUso.execute({
      id,
      id_caixa,
      id_funcionario,
      estadoCaixa,
      quantidadaFaturada,
      horarioAbertura,
      horarioFechamento,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioCaixaController };