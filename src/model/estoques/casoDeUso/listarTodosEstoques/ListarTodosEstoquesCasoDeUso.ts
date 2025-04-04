import { estoques } from "@prisma/client";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";

class ListarTodosEstoquesCasoDeUso {
  async execute(): Promise<estoques[]> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.listarTodosEstoques();
    return result;
  }
}

export { ListarTodosEstoquesCasoDeUso };