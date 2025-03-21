import { Request, Response } from "express";
import { ListarTodosFuncionariosPermissoesCasoDeUso } from "./ListarTodosFuncionariosPermissoesCasoDeUso";

class ListarTodosFuncionariosPermissoesController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarTodosFuncionariosPermissoesCasoDeUso = new ListarTodosFuncionariosPermissoesCasoDeUso();
    const result = await listarTodosFuncionariosPermissoesCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarTodosFuncionariosPermissoesController };