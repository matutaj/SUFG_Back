import { Request, Response } from "express";
import { DeleteCategoriaProdutoCasoDeUso } from "./DeleteCategoriaProdutoCasoDeUso";

class DeleteCategoriaProdutoController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteCategoriaProdutoCasoDeUso = new DeleteCategoriaProdutoCasoDeUso();
        const { id } = req.params;
        await deleteCategoriaProdutoCasoDeUso.execute(id);
        return res.status(204).json();
    }
}
export { DeleteCategoriaProdutoController}