import { Request, Response } from "express";
import { AtualizarFuncaoPermissaoCasoDeUso } from "./AtualizarFuncaoPermissaoCasoDeUso";

class AtualizarFuncaoPermissaoController {
  async handle(req: Request, res: Response): Promise<any> {
    const atualizarFuncaoPermissaoCasoDeUso = new AtualizarFuncaoPermissaoCasoDeUso();
    const { id, id_funcao, id_permissao } = req.body;
    const result = await atualizarFuncaoPermissaoCasoDeUso.execute({
      id,
      id_funcao,
      id_permissao,
    });
    return res.status(200).json(result);
  }
}

export { AtualizarFuncaoPermissaoController };