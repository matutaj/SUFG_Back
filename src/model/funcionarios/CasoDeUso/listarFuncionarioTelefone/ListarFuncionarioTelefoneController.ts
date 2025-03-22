import { Request, Response } from "express";
import { ListarTelefoneFuncionarioCasoDeUso } from "./ListarFuncionarioTelefoneCasoDeUso";
class ListarTelefoneFuncionarioController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTelefoneFuncionarioCasoDeUso = new ListarTelefoneFuncionarioCasoDeUso();
    const { telefoneFuncionario } = req.query;
    const result = await listarTelefoneFuncionarioCasoDeUso.execute(telefoneFuncionario as string);
    return res.status(200).json(result);
  }
}

export { ListarTelefoneFuncionarioController };