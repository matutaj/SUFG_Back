import { transferencias } from "@prisma/client";
import { DadosTransferencia } from "../../repositorioTransferencia/ITransferencia";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { LocalizacaoRepositorio } from "../../../localizacoes/repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { AppError } from "../../../../errors/AppError";
class AtualizarTransferenciaCasoDeUso {
  async execute({
    id,
    id_produto,
    id_funcionario,
    id_localizacao,
    dataTransferencia,
    quantidadeTransferida,
  }: DadosTransferencia): Promise<transferencias> {
    const repositorioTransferencia = new TransferenciaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioLocalizacao = new LocalizacaoRepositorio();

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

    const existeLocalizacao = await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_localizacao);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }

    if (quantidadeTransferida < 0) {
      throw new AppError("A quantidade transferida não pode ser negativa");
    }

    const result = await repositorioTransferencia.atualizarTransferencia({
      id,
      id_produto,
      id_funcionario,
      id_localizacao,
      dataTransferencia,
      quantidadeTransferida,
    });

    return result;
  }
}

export { AtualizarTransferenciaCasoDeUso };