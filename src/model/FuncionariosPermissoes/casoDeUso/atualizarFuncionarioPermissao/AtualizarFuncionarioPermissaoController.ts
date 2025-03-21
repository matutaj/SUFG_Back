import { Request, Response } from "express";
import { AtualizarFuncionarioPermissaoCasoDeUso } from "./AtualizarFuncionarioPermissaoCasoDeUso";

class AtualizarFuncionarioPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioPermissaoCasoDeUso = new AtualizarFuncionarioPermissaoCasoDeUso();
    const { id, id_funcionario, id_permissao } = req.body;
    const result = await atualizarFuncionarioPermissaoCasoDeUso.execute({
      id,
      id_funcionario,
      id_permissao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioPermissaoController };