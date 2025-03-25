import { Request, Response } from "express";
import { DeleteFornecedorCasoDeUso } from "./DeleteFornecedorCasoDeUso";
import { deletarFornecedorSchema } from "../../../../schema/fornecedores";
import { AppError } from "../../../../errors/AppError";
class DeleteFornecedorController {
    async handle(req: Request, res: Response): Promise<any> {
        const deleteFornecedorCasoDeUso = new DeleteFornecedorCasoDeUso();
        const { id } = req.params;
        if (!deletarFornecedorSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        await deleteFornecedorCasoDeUso.execute(id);
        return res.status(201).json({ message: "Fornecedor excluido com sucesso" });
    }
}
export { DeleteFornecedorController };