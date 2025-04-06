import { estoques } from "@prisma/client";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";

class DeleteEstoqueCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioEstoque = new EstoqueRepositorio();
    await repositorioEstoque.deleteEstoque(id);
  }
}

export { DeleteEstoqueCasoDeUso };