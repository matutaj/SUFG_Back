import { entradasEstoque } from "@prisma/client";
import { EntradaEstoqueRepositorio } from "../../repositorioEntradaEstoque/implementacoes/RepositorioEntradaEstoque";

class DeleteEntradaEstoqueCasoDeUso {
  async execute(id: string): Promise<void> {
    const repositorioEntradaEstoque = new EntradaEstoqueRepositorio();

    if (!id) {
      throw new Error("O ID da entrada de estoque é obrigatório para exclusão");
    }

    const existeEntrada = await repositorioEntradaEstoque.listarTodasEntradasEstoque();
    const entradaExistente = existeEntrada.find((entrada) => entrada.id === id);
    if (!entradaExistente) {
      throw new Error("Não existe uma entrada de estoque com esse id");
    }

    await repositorioEntradaEstoque.eliminarEntradaEstoque( id );
  }
}

export { DeleteEntradaEstoqueCasoDeUso };