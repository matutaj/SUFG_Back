import { Request, Response } from "express";
import { AtualizarFuncionarioCaixaCasoDeUso } from "./AtualizarFuncionarioCaixaCasoDeUso";
import { atualizarFuncionarioCaixaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
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
    if (!atualizarFuncionarioCaixaSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    if (!atualizarFuncionarioCaixaSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
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