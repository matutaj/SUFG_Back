import { Request, Response } from "express";
import { ListarCategoriaProdutoPeloNomeCasoDeUso } from "./ListarCategoriaProdutoPeloNomeCasoDeUso";

class ListarCategoriaProdutoPeloNomeController {
    async handle(req: Request, res: Response): Promise<any> {
        const listarCategoriaProdutoPeloNomeCasoDeUso = new ListarCategoriaProdutoPeloNomeCasoDeUso();
        const { nomeCategoria } = req.params;
        const result = await listarCategoriaProdutoPeloNomeCasoDeUso.execute(nomeCategoria);
        return res.status(201).json(result);
    }
}
export { ListarCategoriaProdutoPeloNomeController }
