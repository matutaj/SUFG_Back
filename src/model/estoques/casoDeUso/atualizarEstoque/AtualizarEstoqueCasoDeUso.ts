import { estoques } from "@prisma/client";
import { DadosEstoque } from "../../repositorioEstoque/IEstoque";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";

class AtualizarEstoqueCasoDeUso {
  async execute({
    id,
    id_produto,
    quantidadeAtual,
    lote,
    dataValidadeLote,
  }: DadosEstoque): Promise<estoques> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.atualizarEstoque({
      id,
      id_produto,
      quantidadeAtual,
      lote,
      dataValidadeLote,
    });

    return result;
  }
}

export { AtualizarEstoqueCasoDeUso };
