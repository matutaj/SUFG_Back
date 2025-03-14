import { transacaoes } from "@prisma/client"
import { TransacaoRepositorio } from "../../repositorioTransacao/implementacoes/RepositorioTransacao"
import { DadosTransacao } from "../../repositorioTransacao/ITransacao"

class CriarTransacaoCasoDeUso {
    async execute({ID_cliente, ID_caixa, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento}: DadosTransacao): Promise<transacaoes> {
        const repositorioTransacao = new TransacaoRepositorio()
        if(!numeroDocumento) {
            throw new Error('Nenhuma transacao encontrada!')
        }
        const result = await repositorioTransacao.criarTransacao({ID_cliente, ID_caixa, valorTotalTransacao, dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento})
        return result
    } 
}
export {CriarTransacaoCasoDeUso}