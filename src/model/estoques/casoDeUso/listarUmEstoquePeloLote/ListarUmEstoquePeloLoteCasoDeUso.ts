import { estoques } from "@prisma/client";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";
class ListarUmEstoquePeloLoteCasoDeUso {
  async execute(lote: string): Promise<estoques | undefined> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.listarUmEstoquePeloLote(lote);
    return result;
  }
}

export { ListarUmEstoquePeloLoteCasoDeUso };