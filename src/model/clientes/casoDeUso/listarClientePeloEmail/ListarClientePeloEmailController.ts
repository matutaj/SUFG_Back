import { Request, Response } from "express";
import { ListarEmailClienteCasoDeUso } from "./ListarClientePeloEmailCasoDeUso";
import { listarClienteEmailSchema } from "../../../../schema/clientes";
import { AppError } from "../../../../errors/AppError";
class ListarEmailClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailClienteCasoDeUso = new ListarEmailClienteCasoDeUso();
    const { emailCliente } = req.query;
    if (!await listarClienteEmailSchema.isValid(req.query)) throw new AppError("Erro na Validação dos dados");
    const result = await listarEmailClienteCasoDeUso.execute(emailCliente as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailClienteController };