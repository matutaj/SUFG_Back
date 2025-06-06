import { produtosLocalizacoes } from "@prisma/client";
import { DadosProdutoLocalizacao } from "../../repositorioProdutoLocalizacao/IProdutoLocalizacao";
import { ProdutoLocalizacaoRepositorio } from "../../repositorioProdutoLocalizacao/implementacoes/RepositorioProdutoLocalizacao";
import { SeccaoRepositorio } from "../../../seccoes/repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { PrateleiraRepositorio } from "../../../prateleiras/repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { CorredorRepositorio } from "../../../corredores/repositorioCorredores/implementacoes/RepositorioCorredor";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { LocalizacaoRepositorio } from "../../../localizacoes/repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";
class AtualizarProdutoLocalizacaoCasoDeUso {
  async execute({
    id,
    id_seccao,
    id_prateleira,
    id_corredor,
    id_produto,
    id_localizacao,
    lote,
    dataValidadeLote,
    quantidadeProduto,
    quantidadeMinimaProduto,
  }: DadosProdutoLocalizacao): Promise<produtosLocalizacoes> {
    const repositorioProdutoLocalizacao = new ProdutoLocalizacaoRepositorio();
    const repositorioSeccao = new SeccaoRepositorio();
    const repositorioPrateleira = new PrateleiraRepositorio();
    const repositorioCorredor = new CorredorRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioLocalizacao = new LocalizacaoRepositorio();

    if (!id) {
      throw new AppError(
        "O ID do produto-localização é obrigatório para atualização"
      );
    }

    const existeProdutoLocalizacao =
      await repositorioProdutoLocalizacao.listarUmProdutoLocalizacaoPorId(id);
    if (!existeProdutoLocalizacao) {
      throw new AppError(
        "Não existe um registro de produto-localização com esse id"
      );
    }

    if (!id_seccao || id_seccao.trim() === '') {
      throw new AppError("ID da seção é obrigatório e não pode ser vazio.");
    }
    
    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(id_seccao);
    if (!existeSeccao) {
      throw new AppError("Não existe uma seção com esse id");
    }
    

    const existePrateleira =
      await repositorioPrateleira.listarUmaPrateleiraPeloId(id_prateleira);
    if (!existePrateleira) {
      throw new AppError("Não existe uma prateleira com esse id");
    }

    const existeCorredor = await repositorioCorredor.listarUmCorredorPeloId(
      id_corredor
    );
    if (!existeCorredor) {
      throw new AppError("Não existe um corredor com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(
      id_produto
    );
    if (!existeProduto) {
      throw new AppError("Não existe um produto com esse id");
    }

    const existeLocalizacao =
      await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_localizacao);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }

    if (quantidadeProduto < 0 || quantidadeMinimaProduto < 0) {
      throw new AppError("Quantidades não podem ser negativas");
    }

    const result =
      await repositorioProdutoLocalizacao.atualizarProdutoLocalizacao({
        id,
        id_seccao,
        id_prateleira,
        id_corredor,
        id_produto,
        id_localizacao,
        quantidadeProduto,
        quantidadeMinimaProduto,
        lote,
        dataValidadeLote
      });

    return result;
  }
}

export { AtualizarProdutoLocalizacaoCasoDeUso };
