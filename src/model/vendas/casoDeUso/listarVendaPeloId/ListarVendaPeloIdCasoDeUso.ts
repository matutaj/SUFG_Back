import { vendas } from "@prisma/client";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";

class ListarVendaPorIdCasoDeUso {
  async execute(id: string): Promise<vendas | undefined> {
    const repositorioVenda = new VendaRepositorio();

    if (!id) {
      throw new Error("O ID é obrigatório para a busca");
    }

    const result = await repositorioVenda.listarVendaPorId(id);
    return result;
  }
}

export { ListarVendaPorIdCasoDeUso };