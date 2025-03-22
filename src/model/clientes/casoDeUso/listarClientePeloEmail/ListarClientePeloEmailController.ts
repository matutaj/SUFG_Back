import { Request, Response } from "express";
import { ListarEmailClienteCasoDeUso } from "./ListarClientePeloEmailCasoDeUso";
class ListarEmailClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEmailClienteCasoDeUso = new ListarEmailClienteCasoDeUso();
    const { emailCliente } = req.query;
    const result = await listarEmailClienteCasoDeUso.execute(emailCliente as string);
    return res.status(200).json(result);
  }
}

export { ListarEmailClienteController };