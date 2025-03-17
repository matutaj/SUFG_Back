import { Request, Response } from "express";
import { ListarTodosProdutosCasoDeUso } from "./ListarTodosProdutosCasoDeUso";

class ListarTodosProdutosController {   
    async handle(request: Request, response: Response): Promise<any> {
        const listarTodosProdutosCasoDeUso = new ListarTodosProdutosCasoDeUso();
        const result = await listarTodosProdutosCasoDeUso.execute();
        return response.status(201).json(result);
    }
}
export { ListarTodosProdutosController };