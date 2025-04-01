import { Request, Response } from "express";
import { AtualizarFuncionarioFuncaoCasoDeUso } from "./AtualizarFuncionarioFuncaoCasoDeUso";
import { atualizarFuncionarioFuncaoSchema } from "../../../../schema/funcionariosFuncoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncionarioFuncaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncionarioFuncaoCasoDeUso = new AtualizarFuncionarioFuncaoCasoDeUso();
    const { id } = req.params;
    const { id_funcionario, id_funcao } = req.body;
    if (!await atualizarFuncionarioFuncaoSchema.isValid(req.params))
      throw new AppError("Erro na Validação dos dados");
    if (!await atualizarFuncionarioFuncaoSchema.isValid(req.body))
      throw new AppError("Erro na Validação dos dados");
    const result = await atualizarFuncionarioFuncaoCasoDeUso.execute({
      id,
      id_funcionario,
      id_funcao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncionarioFuncaoController };