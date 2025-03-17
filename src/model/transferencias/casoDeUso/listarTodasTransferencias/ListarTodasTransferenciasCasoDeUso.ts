import { transferencias } from "@prisma/client";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";

class ListarTodasTransferenciasCasoDeUso {
    async execute(): Promise<transferencias[]> {
        const repositorioTransferencia = new TransferenciaRepositorio();
        const result = await repositorioTransferencia.listarTodasTransferencias();
        return result
    }
}
export {ListarTodasTransferenciasCasoDeUso}