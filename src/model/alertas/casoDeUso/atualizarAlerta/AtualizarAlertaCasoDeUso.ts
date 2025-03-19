import { alertas } from "@prisma/client";
import { DadosAlerta } from "../../repositorioAlerta/IAlerta"; 
import { AlertaRepositorio } from "../../repositorioAlerta/implementacoes/RepositorioAlerta"; 
import { CaixaRepositorio } from "../../../caixas/repositorioCaixa/implementacoes/RepositorioCaixa"; 
import { ProdutoRepositorio } from "../../../produtos/repositorioProduto/implementacoes/RepositorioProduto"; 

class AtualizarAlertaCasoDeUso {
  async execute({
    id,
    id_caixa,
    id_produto,
    descricaoAlerta,
    nomeAlerta,
  }: DadosAlerta): Promise<alertas> {
    const repositorioAlerta = new AlertaRepositorio();
    const repositorioCaixa = new CaixaRepositorio();
    const repositorioProduto = new ProdutoRepositorio();

    if (!id) {
      throw new Error("O ID do alerta é obrigatório para atualização");
    }

    const existeAlerta = await repositorioAlerta.listarUmAlertaPeloId(id);
    if (!existeAlerta) {
      throw new Error("Não existe um alerta com esse id");
    }

    const existeCaixa = await repositorioCaixa.listarUmCaixaPeloId(id_caixa);
    if (!existeCaixa) {
      throw new Error("Não existe um caixa com esse id");
    }

    const existeProduto = await repositorioProduto.listarUmProdutoPorId(id_produto);
    if (!existeProduto) {
      throw new Error("Não existe um produto com esse id");
    }

    const alertaComMesmoNome = await repositorioAlerta.listarUmAlertaPeloNome(nomeAlerta);
    if (alertaComMesmoNome && alertaComMesmoNome.id !== id) {
      throw new Error("Já existe um alerta com esse nome");
    }

    const result = await repositorioAlerta.atualizarAlerta({
      id,
      id_caixa,
      id_produto,
      descricaoAlerta,
      nomeAlerta,
    });

    return result;
  }
}

export { AtualizarAlertaCasoDeUso };