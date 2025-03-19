import { Request, Response } from "express";
import { AtualizarCategoriaProdutoCasoDeUso } from "./AtualizarCategoriaProdutoCasoDeUso";

class AtualizarCategoriaProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { nomeCategoria, descricaoCategoria } = req.body;

        const atualizarCategoriaProdutoCasoDeUso = new AtualizarCategoriaProdutoCasoDeUso();
        const categoria = await atualizarCategoriaProdutoCasoDeUso.execute({
            id,
            nomeCategoria,
            descricaoCategoria,
        });

        return res.json(categoria);
    }
}
export { AtualizarCategoriaProdutoController };