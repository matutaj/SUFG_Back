import { transferencias } from "@prisma/client";
import { DadosTransferencia } from "../../repositorioTransferencia/ITransferencia";
import { TransferenciaRepositorio } from "../../repositorioTransferencia/implementacoes/RepositorioTransferencia";
import { FuncionarioRepositorio } from "../../../funcionarios/repositorioFuncionario/implementacoes/RepositorioFuncionario";
import { LocalizacaoRepositorio } from "../../../localizacoes/repositorioLocalizacao/implementacoes/RepositorioLocalizacao";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { AppError } from "../../../../errors/AppError";
class CriarTransferenciaCasoDeUso {
  async execute({
    id_funcionario,
    id_produtoLocalizacao,
    id_produto,
    dataTransferencia,
    quantidadeTransferida,
  }: DadosTransferencia): Promise<transferencias> {
    const repositorioTransferencia = new TransferenciaRepositorio();
    const repositorioFuncionario = new FuncionarioRepositorio();
    const repositorioLocalizacao = new LocalizacaoRepositorio();
    const repositorioProduto = new ProdutoRepositorio();

    const existeProdutoId = await repositorioProduto.listarUmProdutoPorId(
      id_produto
    );
    if (!existeProdutoId) {
      throw new AppError("Não existe um produto com esse id");
    }
    const existeFuncionario =
      await repositorioFuncionario.listarUmFuncionarioPeloId(id_funcionario);
    if (!existeFuncionario) {
      throw new AppError("Não existe um funcionario com esse id");
    }
    const existeLocalizacao =
      await repositorioLocalizacao.listarUmLocalizacaoPeloId(id_produtoLocalizacao);
    if (!existeLocalizacao) {
      throw new AppError("Não existe uma localização com esse id");
    }

    const result = await repositorioTransferencia.criarTransferencia({
      id_funcionario,
      id_produtoLocalizacao,
      id_produto,
      dataTransferencia,
      quantidadeTransferida,
    });
    return result;
  }
}
export { CriarTransferenciaCasoDeUso };
