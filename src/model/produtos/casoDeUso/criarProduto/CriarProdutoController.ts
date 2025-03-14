import { CriarProdutoCasoDeUso } from "./CriarProdutoCasoDeUso"
import { Request, Response } from "express"
class CriarProdutoController{
    async handle(req: Request, res: Response): Promise<any> {
        const produtoCasoDeUso = new CriarProdutoCasoDeUso()
        const {descricaoProduto, nomeProduto, custoAquisicao, dataValidade, precoVenda, quantidadeEstoque, referenciaProduto, ID_categoriaProduto} = req.body
        const result = await produtoCasoDeUso.execute({descricaoProduto, nomeProduto, custoAquisicao, dataValidade, precoVenda, quantidadeEstoque, referenciaProduto, ID_categoriaProduto})
        return res.status(201).json(result)
    }
}
export {CriarProdutoController}