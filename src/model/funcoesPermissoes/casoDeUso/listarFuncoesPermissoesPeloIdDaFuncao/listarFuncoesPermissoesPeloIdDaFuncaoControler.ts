import { Request, Response } from "express";
import { ListarFuncoesPermissoesPeloIdDaFuncao } from "./listarFuncoesPermissoesPeloIdDaFuncaoCasoDeUso";
import { listarFuncaoPermissaoPeloIdSchema } from "../../../../schema/funcoesPermissoes";
import { AppError } from "../../../../errors/AppError";
class listarFuncoesPermissoesPeloIdDaFuncaoControler {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaFuncaoPermissaoPeloIdCasoDeUso =
      new ListarFuncoesPermissoesPeloIdDaFuncao();
    const { id_funcao } = req.params;
    /* if (!(await listarFuncaoPermissaoPeloIdSchema.isValid(req.params)))
      throw new AppError("Erro na Validação dos dados"); */
    const result = await listarUmaFuncaoPermissaoPeloIdCasoDeUso.execute(
      id_funcao
    );
    return res.status(200).json(result);
  }
}

export { listarFuncoesPermissoesPeloIdDaFuncaoControler };
