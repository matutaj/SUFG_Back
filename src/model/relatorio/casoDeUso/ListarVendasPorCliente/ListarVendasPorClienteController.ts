// src/controllers/ListarVendasPorClienteController.ts
import { Request, Response } from "express";
import { ListarVendasPorClienteCasoDeUso } from "./ListarVendasPorClienteCasoDeUso";

class ListarVendasPorClienteController {
  async handle(req: Request, res: Response): Promise<any> {
    const { idCliente } = req.params;
    const { dataInicio, dataFim, limite } = req.query;
    const listarVendasPorClienteCasoDeUso =
      new ListarVendasPorClienteCasoDeUso();
    const result = await listarVendasPorClienteCasoDeUso.execute(
      idCliente,
      new Date(dataInicio as string),
      new Date(dataFim as string),
      limite ? Number(limite) : undefined
    );
    return res.status(200).json(result);
  }
}

export { ListarVendasPorClienteController };
