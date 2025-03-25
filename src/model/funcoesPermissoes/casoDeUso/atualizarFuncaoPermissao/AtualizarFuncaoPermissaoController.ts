import { Request, Response } from "express";
import { AtualizarFuncaoPermissaoCasoDeUso } from "./AtualizarFuncaoPermissaoCasoDeUso";
import { atualizarFuncaoPermissaoSchema } from "../../../../schema/funcoesPermissoes";
import { AppError } from "../../../../errors/AppError";
class AtualizarFuncaoPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncaoPermissaoCasoDeUso = new AtualizarFuncaoPermissaoCasoDeUso();
    const { id } = req.params;
    const { id_funcao, id_permissao } = req.body;
    if (!atualizarFuncaoPermissaoSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    if (!atualizarFuncaoPermissaoSchema.isValid(req.body)) throw new AppError("Erro na Validação dos dados");
    const result = await atualizarFuncaoPermissaoCasoDeUso.execute({
      id,
      id_funcao,
      id_permissao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncaoPermissaoController };