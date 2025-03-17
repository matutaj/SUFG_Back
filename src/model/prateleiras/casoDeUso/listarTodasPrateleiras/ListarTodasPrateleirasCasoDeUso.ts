import { prateleiras } from "@prisma/client";
import { PrateleiraRepositorio } from "../../repositorioPrateleira/implementacoes/RepositorioPrateleira";

class ListarTodasPrateleirasCasoDeUso {
    async execute(): Promise<prateleiras[]> {
        const prateleiraRepositorio = new PrateleiraRepositorio();
        const todasPrateleiras = await prateleiraRepositorio.listarTodasPrateleiras();
        return todasPrateleiras

    }
}
export {ListarTodasPrateleirasCasoDeUso}