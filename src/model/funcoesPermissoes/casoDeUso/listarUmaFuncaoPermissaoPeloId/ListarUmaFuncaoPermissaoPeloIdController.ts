import { Request, Response } from "express";
import { ListarUmaFuncaoPermissaoPeloIdCasoDeUso } from "./ListarUmaFuncaoPermissaoPeloIdCasoDeUso";
import { listarFuncaoPermissaoPeloIdSchema } from "../../../../schema/funcoesPermissoes";
import { AppError } from "../../../../errors/AppError";
class ListarUmaFuncaoPermissaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaFuncaoPermissaoPeloIdCasoDeUso = new ListarUmaFuncaoPermissaoPeloIdCasoDeUso();
    const { id_funcao, id_permissao } = req.params;
    if (!listarFuncaoPermissaoPeloIdSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
    const result = await listarUmaFuncaoPermissaoPeloIdCasoDeUso.execute(id_funcao, id_permissao);
    return res.status(200).json(result);
  }
}

export { ListarUmaFuncaoPermissaoPeloIdController };