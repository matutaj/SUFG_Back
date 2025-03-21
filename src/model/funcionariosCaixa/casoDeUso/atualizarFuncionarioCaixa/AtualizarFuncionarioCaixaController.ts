import { Request, Response } from "express";
import { AtualizarFuncionarioCaixaCasoDeUso } from "./AtualizarFuncionarioCaixaCasoDeUso";

class AtualizarFuncionarioCaixaController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioCaixaCasoDeUso = new AtualizarFuncionarioCaixaCasoDeUso();
    const {
      id,
      id_caixa,
      id_funcionario,
      estadoCaixa,
      quantidadaFaturada,
      horarioAbertura,
      horarioFechamento,
    } = req.body;
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