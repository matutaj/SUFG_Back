import { Request, Response } from "express";
import { AtualizarFuncionarioFuncaoCasoDeUso } from "./AtualizarFuncionarioFuncaoCasoDeUso";

class AtualizarFuncionarioFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioFuncaoCasoDeUso = new AtualizarFuncionarioFuncaoCasoDeUso();
    const { id, id_funcionario, id_funcao } = req.body;
    const result = await atualizarFuncionarioFuncaoCasoDeUso.execute({
      id,
      id_funcionario,
      id_funcao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioFuncaoController };