import { Request, Response } from "express";
import { AtualizarFuncionarioPermissaoCasoDeUso } from "./AtualizarFuncionarioPermissaoCasoDeUso";
import { atualizarFuncionarioPermissaoSchema } from "../../../../schema/funcionariosPermissoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncionarioPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioPermissaoCasoDeUso = new AtualizarFuncionarioPermissaoCasoDeUso();
    const { id } = req.params;
    const { id_funcionario, id_permissao } = req.body;
    if (!await atualizarFuncionarioPermissaoSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarFuncionarioPermissaoSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarFuncionarioPermissaoCasoDeUso.execute({
      id,
      id_funcionario,
      id_permissao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioPermissaoController };