import { estoques } from "@prisma/client";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";
class ListarUmEstoquePeloIdCasoDeUso {
  async execute(id: string): Promise<estoques | undefined> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.listarUmEstoquePeloId(id);
    return result;
  }
}

export { ListarUmEstoquePeloIdCasoDeUso };