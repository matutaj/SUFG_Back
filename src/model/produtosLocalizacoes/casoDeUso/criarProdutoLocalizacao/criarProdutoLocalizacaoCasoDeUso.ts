import { produtosLocalizacoes } from "@prisma/client";
import { DadosProdutoLocalizacao } from "../../repositorioProdutoLocalizacao/IProdutoLocalizacao";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";
import { CorredorRepositorio } from "../../../corredores/repositorioCorredores/implementacoes/RepositorioCorredor";
import { LocalizacaoRepositorio } from "../../../localizacoes/repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { SeccaoRepositorio } from "../../../seccoes/repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { PrateleiraRepositorio } from "../../../prateleiras/repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { AppError } from "../../../../errors/AppError";
class CriarProdutoLocalizacaoCasoDeUso {
  async execute({
    id_corredor,
    id_localizacao,
    id_prateleira,
    id_produto,
    id_seccao,
    quantidadeMinimaProduto,
    quantidadeProduto,
    lote,
    dataValidadeLote
  }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();
    const repositorioCorredor = new CorredorRepositorio();
    const repositorioLocalizacao = new LocalizacaoRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioSeccao = new SeccaoRepositorio();
    const repositorioPrateleira = new PrateleiraRepositorio();

    const existeProdutoId = await repositorioProduto.listarUmProdutoPorId(
      id_produto
    );
    if (!existeProdutoId) {
      throw new AppError("Não existe um produto com esse id");
    }
    const existeCorrdor = await repositorioCorredor.listarUmCorredorPeloId(
      id_corredor
    );
    if (!existeCorrdor) {
      throw new AppError("Não existe um corredor com esse id");
    }
    const existeLocalizacao =
      await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_localizacao);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }
    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(
      id_seccao
    );
    if (!existeSeccao) {
      throw new AppError("Não existe um secção com esse id");
    }

    const existePrateleira =
      await repositorioPrateleira.listarUmaPrateleiraPeloId(id_prateleira);
    if (!existePrateleira) {
      throw new AppError("Não existe uma prateleira com esse id");
    }
    const result = await repositorioProdutoLocalizacao.criarProdutoLocalizacao({
      id_corredor,
      id_localizacao,
      id_prateleira,
      id_produto,
      id_seccao,
      quantidadeMinimaProduto,
      quantidadeProduto,
      lote,
      dataValidadeLote
    });
    return result;
  }
}
export { CriarProdutoLocalizacaoCasoDeUso };
