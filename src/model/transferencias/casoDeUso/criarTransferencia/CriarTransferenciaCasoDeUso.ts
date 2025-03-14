import { transferencias } from "@prisma/client"
import { DadosTransferencia } from "../../repositorioTransferencia/ITransferencia"
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia"
class CriarTransferenciaCasoDeUso {
    async execute({ID_funcionario, ID_localizacao, ID_produto, dataTransferencia, quantidadeTransferida}: DadosTransferencia): Promise<transferencias> {
        const repositorioTransferencia = new TransferenciaRepositorio()
        const existeData = await repositorioTransferencia.listarTodasTransferencias()
        if (!existeData) {
            throw new Error("Nenhuma transferencia cadastrada")
        }
        const result = await repositorioTransferencia.criarTransferencia({ID_funcionario, ID_localizacao, ID_produto, dataTransferencia, quantidadeTransferida})
        return result
    }
}
export {CriarTransferenciaCasoDeUso}