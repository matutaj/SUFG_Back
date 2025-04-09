import { estoques } from "@prisma/client";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";
class ListarUmEstoquePeloLoteCasoDeUso {
  async execute(id_produto: string): Promise<estoques | undefined> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.listarUmEstoquePeloProduto(
      id_produto
    );
    return result;
  }
}

export { ListarUmEstoquePeloLoteCasoDeUso };
