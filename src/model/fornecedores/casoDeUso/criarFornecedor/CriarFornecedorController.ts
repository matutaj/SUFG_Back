import { Request, Response } from "express";
import { CriarFornecedorCasoDeUso } from "./CriarFornecedorCasoDeUso";
import { criarFornecedorSchema } from "../../../../schema/fornecedores";
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
    if (!criarFornecedorSchema.isValid(req.body)) {
      throw new Error("Erro na validação dos campos");
    }
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
