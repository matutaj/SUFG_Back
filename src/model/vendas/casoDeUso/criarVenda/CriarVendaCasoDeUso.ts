import { vendas } from "@prisma/client"
import { VendaRepositorio} from "../../repositorioVenda/implementacoes/RepositorioVenda"
import { DadosVenda } from "../../repositorioVenda/IVenda"

class CriarVendaCasoDeUso {
    async execute({id_cliente, dataEmissao, dataValidade, id_funcionarioCaixa, numeroDocumento, tipoDocumento, valorTotal}: DadosVenda): Promise<vendas> {
        const vendaRepositorio = new VendaRepositorio()
        if(!numeroDocumento) {
            throw new Error('Nenhuma transacao encontrada!')
        }
        const result = await vendaRepositorio.criarVenda({id_cliente, dataEmissao, dataValidade, id_funcionarioCaixa, numeroDocumento, tipoDocumento, valorTotal})
        return result
    } 
}
export {CriarVendaCasoDeUso}