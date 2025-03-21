import { entradasEstoque } from "@prisma/client";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";

class ListarTodasEntradasEstoqueCasoDeUso {
  async execute(): Promise<entradasEstoque[]> {
    const repositorioEntradaEstoque = new EntradaEstoqueRepositorio();
    const result = await repositorioEntradaEstoque.listarTodasEntradasEstoque();
    return result;
  }
}

export { ListarTodasEntradasEstoqueCasoDeUso };