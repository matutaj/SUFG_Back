import { vendas } from "@prisma/client";
import { DadosVenda } from "../../repositorioVenda/IVenda";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { ClienteRepositorio } from "../../../clientes/repositorioCliente/implementacoes/RepositorioCliente";
import { FuncionarioCaixaRepositorio } from "../../../funcionariosCaixa/repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
import { AppError } from "../../../../errors/AppError";
class AtualizarVendaCasoDeUso {
  async execute({
    id,
    id_cliente,
    id_funcionarioCaixa,
    numeroDocumento,
    dataEmissao,
    dataValidade,
    valorTotal,
    metodoPagamento
  }: DadosVenda): Promise<vendas> {
    const repositorioVenda = new VendaRepositorio();
    const repositorioCliente = new ClienteRepositorio();
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new AppError("O ID da venda é obrigatório para atualização");
    }

    const existeVenda = await repositorioVenda.listarVendaPorId(id);
    if (!existeVenda) {
      throw new AppError("Não existe uma venda com esse id");
    }

    const existeCliente = await repositorioCliente.listarUmClientePeloId(
      id_cliente
    );
    if (!existeCliente) {
      throw new AppError("Não existe um cliente com esse id");
    }

    const existeFuncionarioCaixa =
      await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(
        id_funcionarioCaixa
      );
    if (!existeFuncionarioCaixa) {
      throw new AppError("Não existe um funcionário-caixa com esse id");
    }

    if (dataValidade <= dataEmissao) {
      throw new AppError(
        "A data de validade deve ser posterior à data de emissão"
      );
    }

    if (valorTotal < 0) {
      throw new AppError("O valor total não pode ser negativo");
    }

    const result = await repositorioVenda.atualizarVenda({
      id,
      id_cliente,
      id_funcionarioCaixa,
      numeroDocumento,
      dataEmissao,
      dataValidade,
      valorTotal,
      metodoPagamento
    });

    return result;
  }
}

export { AtualizarVendaCasoDeUso };
