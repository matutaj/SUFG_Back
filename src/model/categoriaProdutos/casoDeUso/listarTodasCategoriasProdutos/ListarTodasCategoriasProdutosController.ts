import { Request, Response } from "express";    
import { ListarTodasCategoriasProdutosCasoDeUso } from "./ListarTodasCategoriasProdutosCasoDeUso";  

class ListarTodasCategoriasProdutosController {
    async handle(req: Request, res: Response) {
        const listarTodasCategoriasProdutosCasoDeUso = new ListarTodasCategoriasProdutosCasoDeUso();
        const result = await listarTodasCategoriasProdutosCasoDeUso.execute();  
        return res.status(201).json(result);
    }
}

export { ListarTodasCategoriasProdutosController }