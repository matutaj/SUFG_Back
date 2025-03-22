import { vendas } from "@prisma/client";
import { DadosVenda } from "../../repositorioVenda/IVenda";
import { VendaRepositorio } from "../../repositorioVenda/implementacoes/RepositorioVenda";
import { ClienteRepositorio } from "../../../clientes/repositorioCliente/implementacoes/RepositorioCliente";
import { FuncionarioCaixaRepositorio } from "../../../funcionariosCaixa/repositorioFuncionarioCaixa/implementacoes/RepositorioFuncionarioCaixa";
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto";
class AtualizarVendaCasoDeUso {
  async execute({
    id,
    id_cliente,
    id_funcionarioCaixa,
    numeroDocumento,
    tipoDocumento,
    dataEmissao,
    dataValidade,
    valorTotal,
    vendasProdutos,
  }: DadosVenda): Promise<vendas> {
    const repositorioVenda = new VendaRepositorio();
    const repositorioCliente = new ClienteRepositorio();
    const repositorioFuncionarioCaixa = new FuncionarioCaixaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new Error("O ID da venda é obrigatório para atualização");
    }

    const existeVenda = await repositorioVenda.listarVendaPorId(id);
    if (!existeVenda) {
      throw new Error("Não existe uma venda com esse id");
    }

    const existeCliente = await repositorioCliente.listarUmClientePeloId(id_cliente);
    if (!existeCliente) {
      throw new Error("Não existe um cliente com esse id");
    }

    const existeFuncionarioCaixa = await repositorioFuncionarioCaixa.listarUmFuncionarioCaixaPeloId(id_funcionarioCaixa);
    if (!existeFuncionarioCaixa) {
      throw new Error("Não existe um funcionário-caixa com esse id");
    }

    for (const vendaProduto of vendasProdutos) {
      const existeProduto = await repositorioProduto.listarUmProdutoPorId(vendaProduto.id_produto);
      if (!existeProduto) {
        throw new Error(`Não existe um produto com o id ${vendaProduto.id_produto}`);
      }
      if (vendaProduto.quantidadeVendida <= 0) {
        throw new Error("A quantidade vendida deve ser maior que zero");
      }
    }

    if (dataValidade <= dataEmissao) {
      throw new Error("A data de validade deve ser posterior à data de emissão");
    }

    if (valorTotal < 0) {
      throw new Error("O valor total não pode ser negativo");
    }

    const result = await repositorioVenda.atualizarVenda({
      id,
      id_cliente,
      id_funcionarioCaixa,
      numeroDocumento,
      tipoDocumento,
      dataEmissao,
      dataValidade,
      valorTotal,
      vendasProdutos,
    });

    return result;
  }
}

export { AtualizarVendaCasoDeUso };