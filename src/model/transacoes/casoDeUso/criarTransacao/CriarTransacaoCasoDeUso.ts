import { transacaoes } from "@prisma/client"
import { TransacaoRepositorio } from "../../repositorioTransacao/implementacoes/RepositorioTransacao"
import { DadosTransacao } from "../../repositorioTransacao/ITransacao"

class CriarTransacaoCasoDeUso {
    async execute({id_cliente, id_caixa, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento, id_funcionario, id_produto}: DadosTransacao): Promise<transacaoes> {
        const repositorioTransacao = new TransacaoRepositorio()
        if(!numeroDocumento) {
            throw new Error('Nenhuma transacao encontrada!')
        }
        const result = await repositorioTransacao.criarTransacao({id_cliente, id_caixa, id_funcionario, id_produto, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento})
        return result
    } 
}
export {CriarTransacaoCasoDeUso}