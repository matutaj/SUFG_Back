import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";

class ListarTodasVendasCasoDeUso {
    async execute(): Promise<vendas[]> {
        const vendaRepositorio = new VendaRepositorio();
        const todasVendas = await vendaRepositorio.listarTodasVendas();
        return todasVendas;
    }
}
export {ListarTodasVendasCasoDeUso}