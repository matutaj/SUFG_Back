import { Request, Response } from "express";
import { DeleteFornecedorCasoDeUso } from "./DeleteFornecedorCasoDeUso";

class DeleteFornecedorController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteFornecedorCasoDeUso = new DeleteFornecedorCasoDeUso();
        const { id } = req.params;
        await deleteFornecedorCasoDeUso.execute(id);
        return res.status(201).json({ message: "Fornecedor excluido com sucesso" });
    }
}
export { DeleteFornecedorController };