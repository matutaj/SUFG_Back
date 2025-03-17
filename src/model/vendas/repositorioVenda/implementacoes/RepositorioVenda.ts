import { vendas } from "@prisma/client";
import { DadosVenda, IVenda } from "../IVenda";
import { prisma } from "../../../../prisma/client";

class VendaRepositorio implements IVenda{
    async criarVenda({dataEmissao, numeroDocumento,  tipoDocumento, valorTotal, id_cliente, dataValidade, id_funcionarioCaixa}: DadosVenda): Promise<vendas> {
        const criarVenda = await prisma.vendas.create({
            data:{
                dataEmissao, 
                numeroDocumento, 
                tipoDocumento, 
                valorTotal,
                dataValidade,
                id_cliente, 
                id_funcionarioCaixa
            },
        })
        return criarVenda
    }
    async listarTodasVendas(): Promise<vendas[]> {
        const listarTodasVendas = await prisma.vendas.findMany()
        return listarTodasVendas
    }
    
}
export {VendaRepositorio}


