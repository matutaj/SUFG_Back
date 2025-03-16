import { Request, Response } from "express";
import { ListarTodosFuncionariosCasoDeUso } from "./ListarTodosFuncionariosCasoDeUso";

class ListarTodosFuncionariosController {
    async handle(req: Request, res: Response) {
        const listarTodosFuncionariosCasoDeUso = new ListarTodosFuncionariosCasoDeUso();
        const result = await listarTodosFuncionariosCasoDeUso.execute();
        return res.status(201).json(result);
    }
}
export { ListarTodosFuncionariosController }