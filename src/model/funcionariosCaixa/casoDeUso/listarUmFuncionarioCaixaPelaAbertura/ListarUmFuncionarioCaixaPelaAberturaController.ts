import { Request, Response } from "express";
import { ListarUmFuncionarioCaixaPelaAberturaCasoDeUso } from "./ListarUmFuncionarioCaixaPelaAberturaCasoDeUso";
import { listarFuncionarioCaixaPelaAberturaSchema } from "../../../../schema/funcionariosCaixa";
import { AppError } from "../../../../errors/AppError";
class ListarUmFuncionarioCaixaPelaAberturaController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioCaixaPelaAberturaCasoDeUso = new ListarUmFuncionarioCaixaPelaAberturaCasoDeUso();
    const { horarioAbertura } = req.query;
    if (!listarFuncionarioCaixaPelaAberturaSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmFuncionarioCaixaPelaAberturaCasoDeUso.execute(new Date(horarioAbertura as string));
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioCaixaPelaAberturaController };