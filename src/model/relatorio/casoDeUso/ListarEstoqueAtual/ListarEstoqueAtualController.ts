// src/controllers/ListarEstoqueAtualController.ts
import { Request, Response } from "express";
import { ListarEstoqueAtualCasoDeUso } from "./ListarEstoqueAtualCasoDeUso";

class ListarEstoqueAtualController {
  async handle(req: Request, res: Response): Promise<any> {
    const listarEstoqueAtualCasoDeUso = new ListarEstoqueAtualCasoDeUso();
    const result = await listarEstoqueAtualCasoDeUso.execute();
    return res.status(200).json(result);
  }
}

export { ListarEstoqueAtualController };
