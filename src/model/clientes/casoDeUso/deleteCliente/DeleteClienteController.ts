import { Request, Response } from "express";    
import { DeleteClienteCasoDeUso } from "./DeleteClienteCasoDeUso";
import { deletarClienteSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class DeleteClienteController {
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const deleteClienteCasoDeUso = new DeleteClienteCasoDeUso();
        if (!deletarClienteSchema.isValid(req.params)) throw new AppError("Erro na Validação dos dados");
        const result = await deleteClienteCasoDeUso.execute(id);
        return res.status(200).json(result);
    }
}
export { DeleteClienteController }