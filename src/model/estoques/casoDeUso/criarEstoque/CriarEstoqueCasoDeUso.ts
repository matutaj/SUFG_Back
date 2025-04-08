import { estoques } from "@prisma/client";
import { DadosEstoque } from "../../repositorioEstoque/IEstoque";
import { EstoqueRepositorio } from "../../repositorioEstoque/implementacoes/RepositorioEstoque";

class CriarEstoqueCasoDeUso {
  async execute({
    id_produto,
    quantidadeAtual,
    lote,
    dataValidadeLote,
  }: DadosEstoque): Promise<estoques> {
    const repositorioEstoque = new EstoqueRepositorio();
    const result = await repositorioEstoque.criarEstoque({
      id_produto,
      quantidadeAtual,
      lote,
      dataValidadeLote,
    });
    return result;
  }
}

export { CriarEstoqueCasoDeUso };
