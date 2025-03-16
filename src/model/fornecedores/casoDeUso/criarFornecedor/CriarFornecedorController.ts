import { Request, Response } from "express";
import { CriarFornecedorCasoDeUso } from "./CriarFornecedorCasoDeUso";
class CriarFornecedorController {
  async handle(req: Request, res: Response): Promise<any> {
    const fornecedorCasoDeUso = new CriarFornecedorCasoDeUso();
    const {
      emailFornecedor,
      moradaFornecedor,
      nomeFornecedor,
      nif,
      telefoneFornecedor,
    } = req.body;
    const result = await fornecedorCasoDeUso.execute({
      emailFornecedor,
      moradaFornecedor,
      nomeFornecedor,
      nif,
      telefoneFornecedor,
    });
    return res.status(201).json(result);
  }
}
export { CriarFornecedorController };
