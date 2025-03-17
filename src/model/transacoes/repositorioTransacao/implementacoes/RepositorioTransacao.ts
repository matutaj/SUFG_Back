import { transacaoes } from "@prisma/client";
import { DadosTransacao, ITransacao } from "../ITransacao";
import { prisma } from "../../../../prisma/client";

class TransacaoRepositorio implements ITransacao{
    async criarTransacao({dataEmissao, numeroDocumento, precoUnitario, quantidadeVendida, tipoDocumento, valorTotalTransacao, id_cliente, id_funcionario, id_produto, id_caixa}: DadosTransacao): Promise<transacaoes> {
        const criarTransacao = await prisma.transacaoes.create({
            data:{
                dataEmissao, 
                numeroDocumento, 
                precoUnitario, 
                quantidadeVendida, 
                tipoDocumento, 
                valorTotalTransacao,
                id_cliente, 
                id_funcionario, 
                id_produto, 
                id_caixa
            },
        })
        return criarTransacao
    }
    async listarTodasTransacoes(): Promise<transacaoes[]> {
        const listarTodasTransacoes = await prisma.transacaoes.findMany()
        return listarTodasTransacoes
    }
    
}
export {TransacaoRepositorio}


