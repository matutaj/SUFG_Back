import { transferencias } from "@prisma/client";
import { DadosTransferencia } from "../../repositorioTransferencia/ITransferencia";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { LocalizacaoRepositorio } from "../../../localizacoes/repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { SeccaoRepositorio } from "../../../seccoes/repositorioSeccoes/Implementacoes/RepositorioSeccao";
import { PrateleiraRepositorio } from "../../../prateleiras/repositorioPrateleira/implementacoes/RepositorioPrateleira";
import { CorredorRepositorio } from "../../../corredores/repositorioCorredores/implementacoes/RepositorioCorredor";
import { AppError } from "../../../../errors/AppError";

class AtualizarTransferenciaCasoDeUso {
  async execute({
    id,
    id_produto,
    id_funcionario,
    id_produtoLocalizacao,
    id_localizacao_origem,
    id_localizacao_destino,
    id_seccao_destino,
    id_prateleira_destino,
    id_corredor_destino,
    quantidadeTransferida,
    dataTransferencia,
  }: DadosTransferencia): Promise<transferencias> {
    const repositorioTransferencia = new TransferenciaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioLocalizacao = new LocalizacaoRepositorio();
    const repositorioSeccao = new SeccaoRepositorio();
    const repositorioPrateleira = new PrateleiraRepositorio();
    const repositorioCorredor = new CorredorRepositorio();

    if (!id) {
      throw new AppError("O ID da transferência é obrigatório para atualização");
    }

    const existeTransferencia = await repositorioTransferencia.listarUmaTransferenciaPorId(id);
    if (!existeTransferencia) {
      throw new AppError("Não existe uma transferência com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new AppError("Não existe um produto com esse id");
    }

    const existeFuncionario = await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionário com esse id");
    }

    const existeLocalizacaoOrigem = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_localizacao_origem);
    if (!existeLocalizacaoOrigem) {
      throw new AppError("Não existe uma localização de origem com esse id");
    }

    const existeLocalizacaoDestino = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_localizacao_destino);
    if (!existeLocalizacaoDestino) {
      throw new AppError("Não existe uma localização de destino com esse id");
    }

    const existeSeccao = await repositorioSeccao.listarUmaSeccaoPeloId(id_seccao_destino);
    if (!existeSeccao) {
      throw new AppError("Não existe uma seção com esse id");
    }

    const existePrateleira = await repositorioPrateleira.listarUmaPrateleiraPeloId(id_prateleira_destino);
    if (!existePrateleira) {
      throw new AppError("Não existe uma prateleira com esse id");
    }

    const existeCorredor = await repositorioCorredor.listarUmCorredorPeloId(id_corredor_destino);
    if (!existeCorredor) {
      throw new AppError("Não existe um corredor com esse id");
    }

    if (quantidadeTransferida < 0) {
      throw new AppError("A quantidade transferida não pode ser negativa");
    }

    if (!(dataTransferencia instanceof Date) || isNaN(dataTransferencia.getTime())) {
      throw new AppError("Formato de data inválido");
    }

    const result = await repositorioTransferencia.atualizarTransferencia({
      id,
      id_produto,
      id_produtoLocalizacao,
      id_funcionario,
      id_localizacao_origem,
      id_localizacao_destino,
      id_seccao_destino,
      id_prateleira_destino,
      id_corredor_destino,
      quantidadeTransferida,
      dataTransferencia,
    });

    return result;
  }
}

export { AtualizarTransferenciaCasoDeUso };