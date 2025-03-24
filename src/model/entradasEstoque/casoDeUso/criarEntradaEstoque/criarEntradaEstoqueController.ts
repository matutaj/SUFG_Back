import { CriarEntradaEstoqueCasoDeUso } from "./CriarEntradaEstoqueCasoDeUso";
import { Request, Response } from "express";
import { criarEntradaSchema } from "../../../../schema/entradasEstoque";

class CriarEntradaEstoqueController {
    async handle(req: Request, res: Response): Promise<any> {
        const criarEntradaEstoqueCasoDeUso = new CriarEntradaEstoqueCasoDeUso();
        const { id_fornecedor, id_produto, id_funcionario, produtoRecebido, quantidadeRecebida, dataEntrada, custoUnitario, lote, dataValidadeLote } = req.body;
        if (!criarEntradaSchema.validate(req.body)) return res.status(400).json({message: "Dados inválidos"})
        const result = await criarEntradaEstoqueCasoDeUso.execute({id_fornecedor, id_produto, id_funcionario, produtoRecebido, quantidadeRecebida, dataEntrada, custoUnitario, lote, dataValidadeLote })
        return res.status(201).json(result)
    }
}
export { CriarEntradaEstoqueController }