import { Request, Response } from "express";
import { ListarUmaFuncaoPermissaoPeloIdCasoDeUso } from "./ListarUmaFuncaoPermissaoPeloIdCasoDeUso";

class ListarUmaFuncaoPermissaoPeloIdController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarUmaFuncaoPermissaoPeloIdCasoDeUso = new ListarUmaFuncaoPermissaoPeloIdCasoDeUso();
    const { id_funcao, id_permissao } = req.params;
    const result = await listarUmaFuncaoPermissaoPeloIdCasoDeUso.execute(id_funcao, id_permissao);
    return res.status(200).json(result);
  }
}

export { ListarUmaFuncaoPermissaoPeloIdController };