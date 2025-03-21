import { Request, Response } from "express";
import { ListarUmFuncionarioCaixaPelaAberturaCasoDeUso } from "./ListarUmFuncionarioCaixaPelaAberturaCasoDeUso";

class ListarUmFuncionarioCaixaPelaAberturaController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmFuncionarioCaixaPelaAberturaCasoDeUso = new ListarUmFuncionarioCaixaPelaAberturaCasoDeUso();
    const { horarioAbertura } = req.query;
    const result = await listarUmFuncionarioCaixaPelaAberturaCasoDeUso.execute(new Date(horarioAbertura as string));
    return res.status(200).json(result);
  }
}

export { ListarUmFuncionarioCaixaPelaAberturaController };